import { Router } from "express";

import {
  registerUsers,
  loginUsers,
  editUsers,
  deleteUsers,
} from "../controllers/users.controllers";

const router = Router();

// Welcome
router.get("/login", (req, res) => {
  res.render("index")
})

// Login
router.post("/login", registerUsers);

router.get("/login/:id", loginUsers);

router.put("/login/:id", editUsers);

router.delete("/login/:id", deleteUsers);

export default router;
