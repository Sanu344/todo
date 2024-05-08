const express = require("express");
const auth = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User, ValidateUser } = require("../models/users");

auth.post("/", async (req, res) => {
  const { error } = ValidateUser(req.body);
  if (error)
    return res.send({
      status: false,
      alert: true,
      messsage: error.details[0].message,
    });

  let user = await User.findOne({ email: req.body.email });

  if (!user)
    return res.send({
      status: false,
      alert: true,
      messsage: "Invalid User Id or Password",
    });

  try {
    const check = await bcrypt.compare(req.body.password, user.password);
    if (!check)
      return res.send({
        status: false,
        alert: true,
        messsage: "Invalid User Id or Password",
      });

    const token = jwt.sign({ email: user.email }, "secretKey");

    res.send({
      status: true,
      alert: true,
      token: token,
      user: user.email,
      messsage: "Login Sucessful",
    });
  } catch (error) {
    return res.send({
      status: true,
      alert: true,
      messsage: error.message,
    });
  }
});

module.exports = auth;
