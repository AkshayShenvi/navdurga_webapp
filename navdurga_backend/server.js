// const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const db = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoute = require("./routes/auth");

const app = express();

const port = 5000;
app.use('/user', authRoute); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(port, function () {
  console.log("Server running on port " + port);
});
