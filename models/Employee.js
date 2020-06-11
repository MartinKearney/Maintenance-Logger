const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  employeeNumber: Number,
  date: { type: String, default: Date.now },
});

module.exports = mongoose.model('Employee', employeeSchema);
