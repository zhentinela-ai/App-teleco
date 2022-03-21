import { Router } from "express";

import {
  registerUsers,
  loginUsers,
  editUsers,
  deleteUsers,
} from "../controllers/users.controllers";

const router = Router();

router.post("/login", registerUsers);

router.get("/login/:id", loginUsers);

router.put("/login/:id", editUsers);

router.delete("/login/:id", deleteUsers);

export default router;
