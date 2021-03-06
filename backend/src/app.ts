import express from "express";
import router from "./routers/index";

const app = express();

app.use(express.json());

app.use("/api", router);

export default app;
