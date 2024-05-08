const mongoose = require("mongoose");
const app = require("./app");

port = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://test:1322001Maajin@cluster0.ione1sb.mongodb.net/ToDo?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to cloud database");
    app.listen(port, () => console.log("Server running on port", port));
  })
  .catch((e) => console.log("could not connect ", e.message));
