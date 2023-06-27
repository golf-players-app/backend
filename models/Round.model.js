const mongoose = require("mongoose");
const { Schema, model } = mongoose;

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
    club: { type: Schema.Types.ObjectId, ref: "Club" },
    players: { type: Schema.Types.ObjectId, ref: "Player" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Round", roundSchema);
