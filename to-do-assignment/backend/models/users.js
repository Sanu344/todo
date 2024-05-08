const mongoose = require("mongoose");
const joi = require("joi");

const schema = mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("Users", schema);

function ValidateUser(body) {
  const schemaj = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required(),
  });
  return schemaj.validate(body);
}

module.exports = { User, ValidateUser };
