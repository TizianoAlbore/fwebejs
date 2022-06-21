import mongoose from 'mongoose';
const MONGODB_URL = 'mongodb+srv://fweb:fweb@cluster0.0a5pl.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(MONGODB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.once("open", () => console.log("Connessione al DB effettuata"));

export default function dbConnect(){
try {
  mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, () =>
    console.log("connected"));
} catch (error) {
  console.log("could not connect");
}
}
