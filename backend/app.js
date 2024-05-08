const express = require("express");
const app = express();
const cors = require("cors");
const users = require("./routes/users");

app.use(express.json());
app.use(cors());

app.use("/api/register", users);

app.get("/test/", (req, res) => {
  res.send("api working");
});

module.exports = app;
