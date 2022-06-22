import express from "express";
const router = express.Router();

router.get("/(home)", (req, res) => {
  res.render("../views/index.ejs");
});
router.get("/login", (req, res) => {
  res.render("../views/defaultview.html");
});
router.get("/register", (req, res) => {
  res.render("../views/register.ejs");
})


router.get("/menu", (req, res) => {
  res.render("../views/menu.ejs");
})
router.get("/order", (req, res) => {
  res.render("../views/order.ejs");
})
router.get("/manage", (req, res) => {
  res.render("../views/manage.ejs");
})
router.get("/cooker", (req, res) => {
  res.render("../views/cooker.ejs");
})





export default router;
