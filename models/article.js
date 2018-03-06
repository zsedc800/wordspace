const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  title: String,
  content: String,
  description: String,
  commentCount: Number,
  pv: Number,
  date: Number,
  author: String,
  isPublish: Boolean,
  coverImg: String,
  tags: Array
});

module.exports = mongoose.model('Article', schema);
