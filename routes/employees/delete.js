const express = require('express');
const router = express.Router();
const Employee = require('../../models/Employee');

// @route   DELETE employee/delete/:id
// @desc    Delete a contact

router.delete('/:empNum', async (req, res) => {
  try {
    const { empNum } = req.params;
    // attempt to find employee for deletion
    let employee = await Employee.findOne({
      employeeNumber: empNum,
    });
    if (!employee) return res.status(404).json({ msg: 'Employee not found' });

    // remove employee from database
    await Employee.deleteOne({ employeeNumber: empNum }, function (err) {});
    res.status(200).json({ msg: 'Employee removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
