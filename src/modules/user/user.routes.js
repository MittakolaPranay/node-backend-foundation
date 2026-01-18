
import { Router } from "express";
import { getAllUsers } from "./user.controller.js";

const userRoutes = Router();

userRoutes.get("/",getAllUsers);

export default userRoutes;