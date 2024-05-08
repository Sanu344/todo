const express = require("express");
const users = express.Router();
const bcrypt = require("bcrypt");
const { User, ValidateUser } = require("../models/users");

users.post("/", async (req, res) => {
  const { error } = ValidateUser(req.body);
  if (error)
    return res.send({
      status: false,
      alert: true,
      messsage: error.details[0].message,
    });

  let user = await User.findOne({ email: req.body.email });

  if (user)
    return res.send({
      status: false,
      alert: true,
      messsage: "User already Registered",
    });

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(req.body.password, salt);

  user = new User({ email: req.body.email, password: hashed });

  try {
    const data = await user.save();
    res.send({
      status: true,
      alert: true,
      messsage: data,
    });
  } catch (error) {
    res.send({
      status: false,
      alert: true,
      messsage: error.message,
    });
  }
});

module.exports = users;
