const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  client: String,
  date: Date,
  awards: [String],
  image: String,
  description: String
});

module.exports = mongoose.model('Project', ProjectSchema);
