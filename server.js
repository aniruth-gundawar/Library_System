import express from "express";
import morgan from "morgan";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoute.js";

const path = require("path");
dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use(cors());

//api end point
app.use("/api", bookRoutes);


app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});




const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`.bgCyan.white);
});
