const router = require("express").Router();
const roundController = require("../controllers/round.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

router.get("/", isAuthenticated, roundController.availableRounds);
router.get("/player/rounds", isAuthenticated, roundController.roundsPerPlayer);
router.post("/player/:id", isAuthenticated, roundController.addPlayer);
router.post("/players/:id", roundController.addPlayers);

module.exports = router;
