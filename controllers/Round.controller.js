const Round = require("../models/Round.model.js");
const Player = require("../models/Player.model.js");

module.exports.availableRounds = async (req, res, next) => {
  const playerId = req.session.currentUser._id;
  const player = await Player.findbyId(playerId);
  const courses = [];
  const rounds = [];
  player.clubs.forEach((club) => {
    club.courses.forEach((course) => {
      courses.push(course);
    });
  });

  if (courses) {
    courses.forEach(async (course) => {
      rounds.push(await Round.find({ course: course }, { players: { $size: { $lt: 4 } } }));
    });
  }
  return res.status(200).json(rounds);
};

module.exports.addPlayers = async (req, res, next) => {
  const { id } = req.params;
  const { players } = req.body;
  players.forEach(async (player) => {
    await Round.findByIdAndUpdate(id, { $push: { players: player } });
  });
};
