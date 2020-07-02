const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  employeeNumber: Number,
});

// A collection called 'employees' is created
module.exports = mongoose.model('Employee', employeeSchema);
