const mongoose = require('mongoose');

const AwardSchema = new mongoose.Schema({
  type: String,
  title: String,
  date: Date,
  project: String
});

module.exports = mongoose.model('Award', AwardSchema);
