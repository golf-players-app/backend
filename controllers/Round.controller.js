const Round = require("../models/Round.model.js");
const Player = require("../models/Player.model.js");

module.exports.availableRounds = async (req, res, next) => {
  const playerId = req.session.currentUser._id;
  const player = await Player.findbyId(playerId);
  const courses = [];
  player.clubs.forEach((club) => {});
};
