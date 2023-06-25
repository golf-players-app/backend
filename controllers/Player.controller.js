const Player = require("../models/Player.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware");
const saltRounds = 10;
const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

module.exports.create = async (req, res, next) => {
  try {
    const {
      name,
      surnameOne,
      surnameTwo,
      email,
      mobilePhone,
      gender,
      password,
      profilePic,
      federatedNumber,
      handicap,
      biography,
      clubs,
    } = req.body;

    if (!password.test(regEx)) {
      res.status(400).json({
        message:
          "La contraseña tiene que tener una longitud mínima de 6 caractéres con al menos una mayúscula, una minúsucla y un número",
      });
      return;
    }

    const foundPlayer = await Player.findOne({ email });

    if (foundPlayer) {
      res.status(400).json({ message: "Un usuario ya existe con este email" });
      return;
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashedSync(password, salt);

    const player = await Player.create({
      name,
      surnameOne,
      surnameTwo,
      email,
      mobilePhone,
      gender,
      password: hashedPassword,
      profilePic,
      federatedNumber,
      handicap,
      biography,
      clubs,
    });

    return res.status(201).json(player);
  } catch (error) {
    next(error);
  }
};

//module.exports.listByHandicap = async (req, res, next) => {};

module.exports.detail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const player = await Player.findById(id);
    return res.status(200).json(player);
  } catch (error) {
    next(error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const player = await Player.findByIdAndUpdate(id, req.body, { new: true });
  } catch (error) {
    next(error);
  }
};

module.exports.updatePassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const player = await Player.findById(id);
    if (!bcrypt.compareSync(password, player.password)) {
      res.status(400).json({
        message: "Contraseña en uso, inserte una nueva contraseña",
      });
      return;
    }
    if (!password.test(regEx)) {
      res.status(400).json({
        message:
          "La contraseña tiene que tener una longitud mínima de 6 caractéres con al menos una mayúscula, una minúsucla y un número",
      });
      return;
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashedSync(password, salt);
    const player = await Player.findByIdAndUpdate(id, { password: hashedPassword }, { new: true });
  } catch (error) {
    next(error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Player.findByIdAndDelete(id);
    return res.status(200).json({ message: "Cuenta eliminada correctamente" });
  } catch (error) {
    next(error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
