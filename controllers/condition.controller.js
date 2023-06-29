const Condition = require("../models/Condition.model");

module.exports.create = async (req, res, next) => {
  try {
    const { id } = req.params;
    const player = req.session.currentUser._id;
    const { option } = req.body;
    const condition = await Condition.create({ option, course: id, player });
    return res.status(201).json(condition);
  } catch (error) {
    next(error);
  }
};

module.exports.average = async (req, res, next) => {
  try {
    const { id } = req.params;
    const period = new Date();
    period.setDate(period.getDate() - 2);
    const conditions = await Condition.find({ course: id, createdAt: { $gte: period } }, { option: 1 });
    console.log(conditions);
    const avg = Math.round(conditions.reduce((acc, curr) => acc + curr.option, 0) / conditions.length);
    return res.status(200).json(avg);
  } catch (error) {
    next(error);
  }
};
