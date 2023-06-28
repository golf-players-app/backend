const router = require("express").Router();
const reviewController = require("../controllers/review.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

router.post("/courses/:id", reviewController.create);
router.post("/:id", reviewController.update);
router.delete("/:id", reviewController.delete);
router.get("/courses/:id", reviewController.listByCourse);

module.exports = router;
