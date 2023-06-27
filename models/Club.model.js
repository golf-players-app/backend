const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const clubSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  telephone: {
    type: Number,
  },
  golfCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

module.exports = model("Club", clubSchema);
