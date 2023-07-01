const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { playersLimit } = require("../utils/playersLimit");

const roundSchema = new Schema(
  {
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
    status: {
      type: String,
      enum: ["Available", "Completed"],
      required: true,
    },
    course: { type: Schema.Types.ObjectId, ref: "Course" },
    players: [{ type: Schema.Types.ObjectId, ref: "Player", max: playersLimit }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Round", roundSchema);
