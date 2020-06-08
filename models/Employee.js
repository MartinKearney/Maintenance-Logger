const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  employeeNumber: String,
  date: { type: String, default: Date.now },
});

// Check that a collection called 'employees' is created
module.exports = mongoose.model('Employee', employeeSchema);
