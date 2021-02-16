const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { 
    type: String, 
    required: true,
    max:255 
  },
  password: { 
    type: String, 
    required: true, 
    max:1024 
  },
  created: { 
    type: Date, 
    default: Date.now
  }
});

module.exports = mongoose.model("users", userSchema);
