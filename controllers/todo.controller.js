const Todo = require("../models/Player.model");

module.exports.list = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

module.exports.detail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    return res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    if (!req.body.title) return res.status(400).json({ message: "Bad request" });
    const todo = await Todo.create(req.body);
    return res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    return res.status(200).json({ message: `Todo ${id} successfully deleted 🗑` });
  } catch (error) {
    next(error);
  }
};
