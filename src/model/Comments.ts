import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CommentsSchema = new Schema({
  id_class: {
    type: Schema.Types.ObjectId,
    ref: "Class",
  },
  comment: String,
  data_created: Date,
});

export default model("Comments", CommentsSchema);
