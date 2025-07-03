const mongoose = require('mongoose');

const StudioSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  stats: {
    works: Number,
    sotm: Number,
    sotd: Number,
    hm: Number
  },
  languages: [String],
  status: String,
  budget: String,
  openTo: [String],
  social: {
    instagram: String,
    linkedin: String,
    twitter: String,
    facebook: String,
    youtube: String,
    tiktok: String,
    pinterest: String
  }
});

module.exports = mongoose.model('Studio', StudioSchema);
