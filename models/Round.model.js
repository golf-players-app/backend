const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const roundSchema = new Schema(
  {
    club: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    playerOne: { type: Schema.Types.ObjectId, ref: "Player" },
    playerTwo: { type: Schema.Types.ObjectId, ref: "Player" },
    playerThree: { type: Schema.Types.ObjectId, ref: "Player" },
    playerFour: { type: Schema.Types.ObjectId, ref: "Player" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Round", roundSchema);
