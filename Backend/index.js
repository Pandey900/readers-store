import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGODBURI;

// Connect To MongoDb
try {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database Connected");
} catch (error) {
  console.log("Database Connection Failed");
}

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
