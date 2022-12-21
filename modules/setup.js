import express from "express";
import sqlite3 from "sqlite3";
import session from "express-session";
import cors from "cors";

const app = express();
const db = new sqlite3.Database("db.db");

app.use(express.static("./app/build"));
app.use(cors());
app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: true,
  })
);

db.run("CREATE TABLE IF NOT EXISTS users (email TEXT, username TEXT, password TEXT)");

db.run("CREATE TABLE IF NOT EXISTS posts (text TEXT, user TEXT, datetime TEXT)");

export { db, app };
