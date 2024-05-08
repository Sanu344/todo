const express = require("express");
const todo = express.Router();
const { Todo, Validate } = require("../models/todo");
const auth = require("../middlewares/authorisation");
todo.post("/add", auth, async (req, res) => {
  const to = new Todo({
    email: req.body.email,
    activity: req.body.activity,
    status: "pending",
  });

  try {
    const data = await to.save();
    res.send({
      status: true,
      alert: true,
      messsage: "New Task Added ",
    });
  } catch (error) {
    res.send({
      status: false,
      alert: true,
      messsage: error.message,
    });
  }
});

module.exports = todo;
