const { Schema, model } = require("mongoose");

const statusSchema = new Schema(
  {
    status: {
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

module.export = model("Status", statusSchema);
