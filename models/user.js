const mongoose = require('mongoose');

let schema = mongoose.Schema({
  userName: String,
  password: String,
  headPic: String,
  type: Number
});

module.exports = mongoose.model('User', schema);