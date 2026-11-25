import { Router } from "express";
import userController from "../../controller/user.controller.js";

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUser);

export default userRouter;