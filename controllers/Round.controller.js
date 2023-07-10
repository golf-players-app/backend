const Round = require("../models/Round.model.js");
const Player = require("../models/Player.model.js");
const Club = require("../models/Club.model.js");
const { playersLimit } = require("../utils/playersLimit");

module.exports.availableRounds = async (req, res, next) => {
  try {
    const playerId = req.payload._id;
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

    if (courses.length > 0) {
      await Promise.all(
        courses.map(async (course) => {
          const round = await Round.find({ course: course, status: "Available" });
          if (round.length >= 1) {
            rounds.push(round);
          }
        })
      );
    }
    return res.status(200).json(rounds);
  } catch (error) {
    next(error);
  }
};

module.exports.addPlayers = async (req, res, next) => {
  try {
    const { id } = req.params;
    let round = await Round.findById(id);
    const { players } = req.body;
    if (playersLimit - round.players.length >= players.length) {
      round = await Round.findByIdAndUpdate(id, { $push: { players: players } }, { new: true });
    } else {
      res.status(400).json({ message: "Número máximo de jugadores alcanzado" });
    }
    if (round.players.length == playersLimit) {
      round = await Round.findByIdAndUpdate(id, { status: "Completed" }, { new: true });
    }
    return res.status(200).json(round);
  } catch (error) {
    next(error);
  }
};

module.exports.addPlayer = async (req, res, next) => {
  try {
    const playerId = req.session.currentUser._id;
    const { id } = req.params;
    let round = await Round.findByIdAndUpdate(id, { $push: { players: playerId } }, { new: true });
    if (round.players.length == playersLimit) {
      round = await Round.findByIdAndUpdate(id, { status: "Completed" }, { new: true });
    }
    return res.status(200).json(round);
  } catch (error) {
    next(error);
  }
};
