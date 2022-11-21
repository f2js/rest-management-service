const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(xss());
app.use(cors());

const menuRouter = require("./Routes/menuRouter");

app.use("/menu", menuRouter);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" + req.originalUrl });
});

module.exports = app;
