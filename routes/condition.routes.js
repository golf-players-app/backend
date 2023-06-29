const router = require("express").Router();
const conditionController = require("../controllers/condition.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

// (C)RUD
router.post("/courses/:id", conditionController.create);
// C(R)UD
router.get("/courses/:id", conditionController.average);

module.exports = router;
