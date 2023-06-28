const router = require("express").Router();
const reviewController = require("../controllers/review.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

router.post("/courses/:id/reviews", reviewController.create);
router.post("/reviews/:id", reviewController.update);
router.delete("/reviews/:id", reviewController.delete);
router.get("/courses/:id/reviews", reviewController.listByCourse);
