const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: Boolean,
  employee: String,
  history: Array,
  jobNum: Number,
  date: { type: String, default: Date.now() },
});

// Check that a collection called 'jobs' is created
module.exports = mongoose.model('Job', jobSchema);
