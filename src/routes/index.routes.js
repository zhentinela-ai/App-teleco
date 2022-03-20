import { Router } from "express";
const router = Router();

// Welcome
router.get("/", (req, res) => {
  res.render("index", {
    layout: "main"
  });
  console.log("You are in the index");
});

router.post("/", (req, res) => {
})

export default router;
