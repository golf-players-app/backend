const Player = require("../models/Player.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const { regEx } = require("../utils/regexPassword.js");

module.exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!regEx.test(password)) {
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
    const hashedPassword = bcrypt.hashSync(password, salt);

    const player = await Player.create({
      ...req.body,
      password: hashedPassword,
    });

    return res.status(201).json(player);
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (email === "" || password === "") {
      res.status(400).json({ message: "Email y password no pueden estar vacíos" });
      return;
    }
    const player = await Player.findOne({ email });

    if (!player) {
      res.status(401).json({ message: "Jugador no encontrado" });
      return;
    }

    if (bcrypt.compareSync(password, player.password)) {
      const { _id, email } = player;
      const payload = { _id, email };
      const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: "6h",
      });
      req.session.currentUser = player._id;
      res.json({ authToken });
    } else {
      res.status(401).json({ message: "No se ha podido loguear al usuario" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.listByContacts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contacts = [];
    const contactsId = await Player.findById(id, { contacts: 1 });
    contactsId.forEach(async (contactId) => {
      contacts.push(await Player.findById(contactId));
    });
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

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
    return res.status(200).json(player);
  } catch (error) {
    next(error);
  }
};

module.exports.updatePassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const playerPassword = await Player.findById(id);
    if (!bcrypt.compareSync(password, playerPassword.password)) {
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
    return res.status(201).json(player);
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

module.exports.logout = async (req, res, next) => {
  try {
    req.session.destroy();
    return res.status(200).json({ message: "Player desconectado correctamente" });
  } catch (error) {
    next(error);
  }
};

module.exports.verify = async (req, res, next) => {
  try {
    console.log("Jugador logueado: ", req.payload);
    res.status(200).json(req.payload);
  } catch (error) {
    next(error);
  }
};
