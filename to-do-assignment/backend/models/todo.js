const mongoose = require("mongoose");
const joi = require("joi");

const schema = mongoose.Schema({
  email: { type: String, required: true },
  activity: { type: String, required: true },
  status: { type: String },
});

const Todo = mongoose.model("todos", schema);

function Validate(body) {
  const schemat = joi.object({
    email: joi.string().required().email(),
    activity: joi.string().required(),
    status: joi.string(),
  });
  return schemat.validate(body);
}

module.exports = { Todo, Validate };
