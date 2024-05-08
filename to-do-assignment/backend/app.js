const express = require("express");
const app = express();
const cors = require("cors");
const users = require("./routes/users");
const auth = require("./routes/auth");
const todo = require("./routes/todo");
app.use(express.json());
app.use(cors());

app.use("/api/register", users);
app.use("/api/login", auth);
app.use("/api/todo", todo);

app.get("/test/", (req, res) => {
  res.send("api working");
});

module.exports = app;
