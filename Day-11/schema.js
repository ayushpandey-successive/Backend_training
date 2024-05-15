const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: String,
  password: String,
  roles: {
    type:[{ type: String, enum:['admin','user'] }],
    default: ['user']
    
  },
});

const User = mongoose.model("User", userSchema); // Changed model name to singular, conventionally capitalized
module.exports = User;