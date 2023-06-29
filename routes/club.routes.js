const router = require("express").Router();
const clubController = require("../controllers/club.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

// C(R)UD
router.get("/:id", clubController.detail);
router.get("/", clubController.list);

module.exports = router;
