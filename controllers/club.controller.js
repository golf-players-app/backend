const Club = require("../models/Club.model");

module.exports.detail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const club = await Club.findbyId(id);
    return res.status(200).json(club);
  } catch (error) {
    next(error);
  }
};

module.exports.list = async (req, res, next) => {
  try {
    const clubs = await Club.find();
    return res.status(200).json(clubs);
  } catch (error) {
    next(error);
  }
};
