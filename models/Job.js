const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  employee: String,
  history: Array,
  jobNum: Number,
  date: { type: String, default: Date.now },
});

// A collection called 'jobs' is created
module.exports = mongoose.model('Job', jobSchema);
