const router = require("express").Router();
const roundController = require("../controllers/round.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

router.get("/rounds", roundController.availableRounds);

router.post("/rounds/:id", roundController.addPlayers);
