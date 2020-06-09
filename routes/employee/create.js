const express = require('express');
const router = express.Router();
const Employee = require('../../models/Employee');

// @route     Post /employee/create
// @desc      Create a new employee record

router.post('/', async (req, res) => {
  console.log(req.body);

  // Destrcuture request
  const { firstName, lastName } = req.body;

  try {
    // Check if employee exists already
    let employee = await Employee.findOne({ firstName, lastName });
    if (employee) {
      return res.status(400).json({ msg: 'Employee already exists' });
    }

    // create a new document 'employee' by using the model 'Employee'
    employee = new Employee({
      firstName,
      lastName,
    });

    // save the document to the db
    await employee.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

  return res.status(200).json({ msg: 'New Employee Created!' });
});

module.exports = router;
