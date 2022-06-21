import express from "express";
const router = express.Router();

router.get("/(home)", (req, res) => {
  res.render("../views/index.ejs");
});
router.get("/login", (req, res) => {
  res.render("../views/defaultview.html");
});

export default router;
