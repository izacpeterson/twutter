import express from "express";
import { db } from "./setup.js";

const router = express.Router();

router.get("/new", (req, res) => {
  if (req.session.user) {
    let post = [req.query.text, req.session.user.email, new Date()];
    db.run(
      "INSERT INTO posts(text, user, datetime) VALUES(?, ?, ?)",
      post,
      (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send(post);
        }
      }
    );
  } else {
    res.send("not logged in");
  }
});

router.get("/all", (req, res) => {
  db.all(
    "SELECT text, username, datetime FROM posts INNER JOIN users ON users.email = posts.user",
    (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    }
  );
});

export default router;
