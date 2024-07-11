import { Router } from "express";
import { userControllers } from "./user-controller";

const userRouter = Router();

userRouter.route("/").get(userControllers.getUser);

export { userRouter };
