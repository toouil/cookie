require('dotenv').config()

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: [process.env.ORIGIN]
}));


const cookieDays = (days) => {
  return days * 1000 * 60 * 60 * 24;
};

app.get("/", (req, res) => {
  res.send("ttt");
});

// cookies :
app.get("/set-cookie", (req, res) => {
  res.cookie('zaka', "ria").send()
});

app.get("/get-cookie", async (req, res) => {
  // const { acces_token } = req.cookies;
  res.json(req.cookies || {});
});

app.get("/delete-cookie", (req, res) => {
  res.clearCookie("zaka").send("Deleted !!");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Running on port : " + PORT);
});
