const express = require('express');
const router = express.Router();
const Employee = require('../../models/Employee');

// @route     Get /employees/get-all
// @desc      Get all employee details

router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
