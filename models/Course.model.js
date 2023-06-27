const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: { type: String, enum: ["Point"] },
    coordinates: { type: [Number], index: "2dsphere" },
  },
  holes: {
    type: Number,
    required: true,
  },
  club: { type: Schema.Types.ObjectId, ref: "Club" },
});
