require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require('path');  // for path manipulation

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: [process.env.ORIGIN]
  })
);




// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, 'dist')));

app.get("/set-cookie", (req, res) => {
  res.cookie("name", "value").send("Done");
});

app.get("/get-cookie", async (req, res) => {
  res.json(req.cookies);
});

app.get("/delete-cookie", (req, res) => {
  res.clearCookie("name").send("Done");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Running on port : " + PORT);
});
