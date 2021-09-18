import express from "express";
import connectToDataBase from "./database";
import router from "./routes";

const app = express();
connectToDataBase();
app.use(express.json());
app.use(router);
export default app;
