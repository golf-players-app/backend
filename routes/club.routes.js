const router = require("express").Router();
const clubController = require("../controllers/club.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

router.get("/:id", clubController.detail);
router.get("/", clubController.list);

module.exports = router;
