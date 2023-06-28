const router = require("express").Router();
const statusController = require("../controllers/status.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

router.post("/:id/status", statusController.create);
router.get("/:id/status", statusController.average);

module.exports = router;
