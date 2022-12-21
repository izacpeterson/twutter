import express from "express";
import crypto from "crypto";
import { db } from "./setup.js";

const router = express.Router();

router.get("/new", (req, res) => {
  const hash = crypto.createHash("sha256");
  hash.update(req.query.password);
  const hashedPassword = hash.digest("hex");

  db.run(
    "INSERT INTO users(email, username, password) VALUES(?, ?, ?)",
    [req.query.email, req.query.username, hashedPassword],
    (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("User Added");
      }
    }
  );
});

router.get("/login", (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
    if (err) {
      res.send(err);
    } else if (row) {
      // compare the provided password with the hashed password in the database
      const hash = crypto.createHash("sha256");
      hash.update(password);
      const hashedPassword = hash.digest("hex");
      if (hashedPassword === row.password) {
        // password is correct, log the user in
        req.session.user = { email: row.email, username: row.username };
        res.send(req.session.user);
      } else {
        // password is incorrect
        res.send("Incorrect password");
      }
    } else {
      // no user with the provided email was found
      res.send("User not found");
    }
  });
});

router.get("/user", (req, res) => {
  if (req.session.user) {
    res.send(req.session.user);
  } else {
    res.send("Not logged in");
  }
});

export default router;
