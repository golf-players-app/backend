const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const playerSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },
    surnameOne: {
      type: String,
    },
    surnameTwo: {
      type: String,
    },
    email: {
      type: String,
      unique: [true, "Email must be unique"],
      required: [true, "Email is required"],
    },
    gender: {
      type: String,
      enum: ["Female", "Male"],
    },
    birthday: {
      type: Date,
      required: [true, "Birthday is required"],
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
    },
    federatedNumber: {
      type: String,
    },
    handicap: {
      type: Number,
    },
    gamePreference: {
      type: String,
      enum: ["Competitivo", "Amistoso", "Ambos"],
    },
    biography: {
      type: String,
    },
    clubs: [{ type: Schema.Types.ObjectId, ref: "Club" }],
    contacts: [{ type: Schema.Types.ObjectId, ref: "Player" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Player", playerSchema);
