const Round = require("../models/Round.model.js");
const Player = require("../models/Player.model.js");
const Club = require("../models/Club.model.js");

module.exports.availableRounds = async (req, res, next) => {
  const playerId = req.session.currentUser._id;
  const player = await Player.findById(playerId);
  const courses = [];
  const rounds = [];
  await Promise.all(
    player.clubs.map(async (clubId) => {
      const club = await Club.findById(clubId);
      club.golfCourses.map((course) => {
        courses.push(course);
      });
    })
  );
  await Promise.all(
    courses.map(async (course) => {
      rounds.push(await Round.find({ course: course }, { $expr: { $lt: [{ $size: "$getPlayers" }, 4] } }));
    })
  );

  return res.status(200).json(rounds);
};

module.exports.addPlayers = async (req, res, next) => {
  const { id } = req.params;
  const { players } = req.body;
  players.forEach(async (player) => {
    await Round.findByIdAndUpdate(id, { $push: { players: player } });
  });
};
