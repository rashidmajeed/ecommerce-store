// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");

// Import routes into web server
const user = require("./routes/api/user");

const mongoose = require("mongoose");
// Connect to the database server.
const db = require("./keys").DATABASE;

mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log(`Connected to ${db}...`);
  });

// Initializing App
const app = express();

// Using middlewares
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Use Routes here
app.use("/api/users", user);

const port = process.env.PORT || 5000;

app.listen(port, err => {
  console.log("Server is running at ${port}");
});
