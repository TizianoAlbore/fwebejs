import express from 'express';
import dbConnect from './database/dbConnect.js';
import session from 'express-session';
import router from './routes/router.js';

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

app.use(router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});