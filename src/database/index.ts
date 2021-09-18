import mongoose from "mongoose";

function connectToDataBase() {
  mongoose.connect(
    "mongodb+srv://Admin:teste123@cluster0.eczxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {}
  );

  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("conected to the database"));
}

export default connectToDataBase;
