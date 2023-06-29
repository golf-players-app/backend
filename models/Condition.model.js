const { Schema, model } = require("mongoose");

const conditionSchema = new Schema(
  {
    option: {
      type: Number,
      min: 1,
      max: 3,
    },
    course: { type: Schema.Types.ObjectId, ref: "Course" },
    player: { type: Schema.Types.ObjectId, ref: "Player" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Condition", conditionSchema);
