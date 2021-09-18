import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ClassSchema = new Schema({
  name: String,
  description: String,
  video: String,
  data_init: Date,
  data_end: Date,
  data_created: { type: Date, default: Date.now },
  data_updated: { type: Date, default: Date.now },
  total_comments: Number,
});

export default model("Class", ClassSchema);
