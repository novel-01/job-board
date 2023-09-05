// Get the packages we need
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");

// Create Express application
const app = (module.exports = express());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use("/api", userRoutes);

const port = process.env.PORT || 8000;

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect("mongodb://localhost:27017/job_board")
  .then(db => {
    app.listen(port);
    console.log("Server starts on port " + port);
  })
  .catch(err => {
    console.log(err);
  });

