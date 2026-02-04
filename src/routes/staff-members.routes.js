
import { Router } from "express";

import { getAllStaffMembers, getStaffMemberById} from "../controllers/users.controllers.js";

const router = Router();

router.get(
    "/",
    getAllStaffMembers
)

router.get(
    "/:id",
    getStaffMemberById
)

export default router;
