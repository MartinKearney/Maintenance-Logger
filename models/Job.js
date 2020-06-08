const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  employee: String,
  history: Array,
  id: String,
  date: { type: String, default: Date.now },
});

// Check that a collection called 'jobs' is created
module.exports = mongoose.model('Job', jobSchema);