const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    score: {
      type: Number,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
    player: { type: Schema.Types.ObjectId, ref: "Player" },
    course: { type: Schema.Types.ObjectId, ref: "Course" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Review", reviewSchema);
