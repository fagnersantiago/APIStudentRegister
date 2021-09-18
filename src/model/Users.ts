import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UsersSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

export default model("Users", UsersSchema);
