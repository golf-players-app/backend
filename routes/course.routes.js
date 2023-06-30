const router = require("express").Router();
const courseController = require("../controllers/course.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

// C(R)UD
router.get("/:id", courseController.detail);
router.get("/", courseController.list);

module.exports = router;
