import { Router } from "express";

import authRouter from "./auth.routes.js";
import usersRouter from "./users.routes.js";
import staffMemberRouter from "./staff-members.routes.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/users",usersRouter);

router.use("/staff-members", staffMemberRouter);

export default router;