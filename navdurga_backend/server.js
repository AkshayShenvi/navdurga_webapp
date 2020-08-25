<<<<<<< Updated upstream
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
// const gql = require('graphql-tag');
=======
// const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const db = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/auth");
>>>>>>> Stashed changes

const { MONGODB } = require('./config');

const resolvers = require('./resolvers/index');
const typeDefs = require('./typeDefs/typeDefs');

<<<<<<< Updated upstream
const server = new ApolloServer({
  typeDefs,
  resolvers,
=======
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use('/user', authRoute); 

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
>>>>>>> Stashed changes
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log(`MongoDB Connected Successfully..`);
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Apollo Server Running at: ${res.url}`);
  });
