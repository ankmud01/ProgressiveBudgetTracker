const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

let MONGODB_URI = "mongodb://offlinebudgettracker:offlinebudgettracker01@ds031203.mlab.com:31203/heroku_k0v0kwjh" || "mongodb://localhost/budget" 
mongoose.connect(MONGODB_URI)

// routes
app.use(require('./routes/api'));
app.use(require('./routes/html'))


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});