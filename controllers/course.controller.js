const Course = require("../models/Course.model");

module.exports.detail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await Course.findbyId(id);
    return res.status(200).json(course);
  } catch (error) {
    next(error);
  }
};

module.exports.list = async (req, res, next) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};
