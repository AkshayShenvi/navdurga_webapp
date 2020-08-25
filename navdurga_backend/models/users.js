const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
<<<<<<< Updated upstream
  username: { type: String, required: true },
  password: { type: String, required: true },
  last_used: { type: Date, required: true },
=======
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
>>>>>>> Stashed changes
});

module.exports = mongoose.model("users", userSchema);
