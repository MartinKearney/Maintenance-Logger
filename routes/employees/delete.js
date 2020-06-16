const express = require('express');
const router = express.Router();
const Employee = require('../../models/Employee');

// @route   DELETE employees/delete/:id
// @desc    Delete a contact

router.delete('/:empNum', async (req, res) => {
  try {
    const { empNum } = req.params;
    // attempt to find employee for deletion
    let employee = await Employee.findOne({
      employeeNumber: empNum,
    });
    if (!employee) return res.json({ msg: 'Employee not found', code: 'Fail' });

    // remove employee from database
    await Employee.deleteOne({ employeeNumber: empNum }, function (err) {});
    res.json({ msg: 'Employee deleted' });
  } catch (err) {
    console.error(err.message);
    res.json({ msg: 'Failed due to server error', code: 'Fail' });
  }
});

module.exports = router;
