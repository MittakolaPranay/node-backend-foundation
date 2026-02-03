
import { Router } from "express";
import { getAllStaffMembers, login, registerUser } from "./user.controller.js"

const userRoutes = Router();

userRoutes.post("/",registerUser);

userRoutes.post("/login", login);

userRoutes.get("/staff",getAllStaffMembers)

export default userRoutes;