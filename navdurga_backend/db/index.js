const mongoose = require("mongoose");
const { MONGODB } = require("../config");

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  })
  .then(() => {
    console.log(`MongoDB Connected Successfully..`);
  });

const db = mongoose.connection;

module.exports = db;
