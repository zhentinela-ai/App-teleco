import { Router } from "express";
import { signUp, signUpView } from "../controllers/auth.controllers";

const router = Router();

router.get("/signup/:id", signUpView);

router.post("/signup", signUp);

export default router;
