const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  estado : {
    type: Boolean,
    default: true,
  }
});

module.exports = mongoose.model("Usuario", userSchema);