//NPM Packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const app = express();
const chalk = require('chalk');

//MiddleWare
app.use(logger("dev"));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mongoose
mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Ports and Routes
const PORT = process.env.PORT || 8080;
app.use(require("./routes/api.js"));

// Listener
mongoose.connection
.once("open", () => console.log(chalk.magentaBright("Connected to ")+ chalk.greenBright("Mongoose")))
  .on("error", (error) => {
    console.log(chalk.red("Your Error: ", error));
  });
app.listen(PORT, () => {
  console.log(chalk.blue.bold("APP RUNNING ON PORT ") + chalk.yellow.bold(PORT));
});