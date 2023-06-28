const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:3000";
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/golf-players-app";

module.exports = (app) => {
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: [FRONTEND_URL],
    })
  );
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 60000,
      },
      store: MongoStore.create({
        mongoUrl: MONGO_URI,
      }),
    })
  );
};
