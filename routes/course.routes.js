const router = require("express").Router();
const courseController = require("../controllers/course.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

router.get("/courses/:id", courseController.detail);
router.get("/courses", courseController.list);
