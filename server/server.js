const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//Create a Database Connection
mongoose
  .connect("mongodb+srv://likeam99:kakakolo202@cluster0.f3cql.mongodb.net/")
  .then(() => console.log("Mongoosedb Connect"))
  .catch((error) => console.log("Error connecting", error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.listen(PORT, () => console.log("Server is now running on port " + PORT));
