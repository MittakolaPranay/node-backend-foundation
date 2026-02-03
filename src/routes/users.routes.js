
import { Router } from "express";
import { getAllStaffMembers } from "../controllers/users.controllers.js";

const router = Router();

router.get(
    "/staff",
    getAllStaffMembers
)
export default router;