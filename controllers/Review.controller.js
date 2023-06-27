const Review = require("../models/Review.model.js");

module.exports.create = async (req, res, next) => {
  try {
    const player = req.session.currentUser._id;
    const { id } = req.params;
    const { score, comment } = req.body;
    const review = await Review.create({ score, comment, player, course: id });
    return res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { score, comment } = req.body;
    const review = await Review.findByIdAndUpdate(id, { score, comment }, { new: true });
    return res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Review.findByIdAndDelete(id);
    return res.status(200).json({ message: "Review eliminada correctamente" });
  } catch (error) {
    next(error);
  }
};

module.exports.listByCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reviews = await Status.find({ course: id });
    return res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};
