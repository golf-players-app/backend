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
    mobilePhone: {
      type: Number,
      required: [true, "Mobile is required"],
    },
    gender: {
      type: String,
      enum: ["Female, Male"],
      required: [true, "Gender is required"],
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
    },
    federatedNumber: {
      type: Number,
      required: [true, "Federated Number is required"],
    },
    handicap: {
      type: Number,
      required: [true, "Handicap is required"],
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

module.exports = model("Player", userSchema);
