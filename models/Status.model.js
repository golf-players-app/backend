const { Schema, model } = require("mongoose");

const statusSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["Option 1", "Option 2", "Option 3"],
    },
    course: {
      type: String,
      required: true,
    },
    player: { type: Schema.Types.ObjectId, ref: "Player" },
  },
  {
    timestamps: true,
  }
);

module.export = model("Status", statusSchema);
