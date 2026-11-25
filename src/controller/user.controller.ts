import { Request, Response } from "express";
import UserService from "../services/user.service.js";
import UserRepository from "../repositories/user.repository.js";
import type { CreateUserDto } from "../dtos/user.dto.js";
const userService: UserService = new UserService(new UserRepository());

const getUser = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const response = await userService.get(req.params.id);
    if (!response) {
      return res.status(404).json({
        message: "User not found",
        data: null,
        error: {},
        success: false,
      });
    }

    return res.status(200).json({
      message: "Successfully fetched the User",
      data: response,
      error: {},
      success: true,
    });
  } catch (error) {
    console.error("Failed to fetch user", error);
    return res.status(500).json({
      message: "Something went wrong",
      data: null,
      error: { message: "Unable to fetch the User" },
      success: false,
    });
  }
};

const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const response = await userService.getAll();
    return res.status(200).json({
      message: "Successfully fetched the Users",
      data: response,
      error: {},
      success: true,
    });
  } catch (error) {
    console.error("Failed to fetch users", error);
    return res.status(500).json({
      message: "Something went wrong",
      data: null,
      error: { message: "Unable to fetch Users" },
      success: false,
    });
  }
};
const createUser = async (_req: Request, res: Response) => {
  try {
    const response = await userService.create(_req.body);
    return res.status(200).json({
      message: "Created  the Users",
      data: response,
      error: {},
      success: true,
    });
  } catch (error) {
    console.error("Failed to fetch users", error);
    return res.status(500).json({
      message: "Something went wrong",
      data: null,
      error: { message: "Unable to create User" },
      success: false,
    });
  }
};

export default { getUser, getAllUsers, createUser };
