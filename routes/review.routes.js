const router = require("express").Router();
const reviewController = require("../controllers/review.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

// (C)RUD
router.post("/courses/:id", reviewController.create);
// C(R)UD
router.get("/players/:id", reviewController.listByPlayer);
router.get("/courses/:id", reviewController.listByCourse);
// CR(U)D
router.put("/:id", reviewController.update);
// CRU(D)
router.delete("/:id", reviewController.delete);

module.exports = router;
