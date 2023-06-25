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

module.exports.detail = async (req, res, next) => {
  try {
    const {id}
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

module.exports.create = async (req, res, next) => {
  try {
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
