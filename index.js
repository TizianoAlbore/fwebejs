import express from 'express';
import dbConnect from './database/dbConnect.js';
import session from 'express-session';
import router from './routes/router.js';
authController = require("./controllers/authController"),
userController = require("./controllers/userController"),
productController = require("./controllers/productController"),
productRouter = require('./routes/products');


const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: "segretissimo",
  resave: false,
  saveUninitialized: true
}));

const db = dbConnect();
// a

app.use(router);



app.get("/", (req, res) => {
  res.render("Index");
});
app.get("/manage", (req, res) => {
  res.render("manage");
});

app.get("/cooker", (req, res) => {
  res.render("cooker");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/userspace", (req, res) => {
  res.render("userspace");
});



app.use('/product',productRouter);




app.post("/register", userController.addUser, userController.redirectView);
app.post("/addProduct", menuController.addMenu, menuController.redirectView);
app.post("/removeProduct", menuController.removeMenu,menuController.redirectView);
app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login?error=true'
}));





app.listen(port, () => {
  console.log(`listening on port ${port}`);
});