const router = require("express").Router();
const roundController = require("../controllers/round.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

router.get("/", roundController.availableRounds);
router.post("/:id", roundController.addPlayers);

module.exports = router;
