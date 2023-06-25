const Status = require("../models/Status.model.js");

module.exports.create = async (req, res, next) => {
  try {
    const status = await Status.create({ option, course, player });
    return res.status(201).json(status);
  } catch (error) {
    next(error);
  }
};

module.exports.average = async (req, res, next) => {
  try {
    const period = new Date();
    period.setDate(period.getDate() - 2);
    const statuses = await Status.find({ course: courseId, createdAt: { $gte: period } }, { status: 1 });
    const avg = statuses.reduce((acc, curr) => acc + curr, 0) / statuses.length;
    return res.status(200).json(avg);
  } catch (error) {
    next(error);
  }
};
