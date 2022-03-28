const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  firstName: String,
  surname: String,
  dateOfBirth: Date,
});

const Login = mongoose.model("Login", LoginSchema);

module.exports = Login;