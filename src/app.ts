import express from "express";
import cors from "cors";
import { userRouter } from "user/user-route";

const app = express();

//common middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRouter);

export { app };
