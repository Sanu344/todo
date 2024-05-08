const jwt = require("jsonwebtoken");

function authorization(req, res, next) {
  console.log(req.token);
  try {
    const decoded = jwt.verify(req.body.token, "secretKey");
    req.body.email = decoded.email;
    console.table(decoded);
    next();
  } catch (ex) {
    res.status(400).send({
      status: false,
      alert: true,
      message: "Invalid Token Please re login",
    });
  }
}

module.exports = authorization;
