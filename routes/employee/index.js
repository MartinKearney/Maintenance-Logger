const express = require('express');
const router = express.Router();
const Employee = require('../../models/Employee');

// @route     Get /employee/index
// @desc      Get all employee details

router.get('/', async (req, res) => {
  console.log(req.body);

  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
