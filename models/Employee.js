const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  employeeNumber: Number,
});

module.exports = mongoose.model('Employee', employeeSchema);
