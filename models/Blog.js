const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  category: { type: String, required: true },
});

module.exports = mongoose.model('Blog', blogSchema);
