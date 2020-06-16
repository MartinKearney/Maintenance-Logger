const express = require('express');
const router = express.Router();
const Employee = require('../../models/Employee');

// @route     Post /employees/create
// @desc      Create a new employee record

router.post('/', async (req, res) => {
  // Destrcuture request
  const { firstName, lastName } = req.body;
  let employeeNumber;
  try {
    // Check if employee exists already
    let employee = await Employee.findOne({ firstName, lastName });
    if (employee) {
      return res
        .status(200)
        .json({ msg: 'Employee already exists', code: 'Fail' });
    }
    // get all employees
    const employees = await Employee.find();

    // determine the employee number
    if (employees.length === 0) {
      employeeNumber = 1;
    } else {
      let largest = 1;
      employees.forEach((emp) => {
        if (emp.employeeNumber > largest) {
          largest = emp.employeeNumber;
        }
      });
      // set new number to one greater than largest
      employeeNumber = largest + 1;
    }

    // create a new document 'employee' by using the model 'Employee'
    employee = new Employee({
      firstName,
      lastName,
      employeeNumber,
    });

    // save the document to the db
    await employee.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

  return res.status(200).json({
    msg: `${firstName} ${lastName} added as an employee`,
    empNum: `${employeeNumber}`,
  });
});

module.exports = router;
