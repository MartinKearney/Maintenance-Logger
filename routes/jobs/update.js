const express = require('express');
const router = express.Router();
const Job = require('../../models/Job');

// @route   DELETE jobs/update/:id
// @desc    Delete a job

router.put('/:jobNum', async (req, res) => {
  try {
    const { jobNum } = req.params;
    // attempt to find job to update
    let job = await Job.findOne({
      jobNum: jobNum,
    });
    if (!job) return res.json({ msg: 'Job not found', code: 'Fail' });

    // an update request will have description, status, employee
    // description must be different - checked client side
    // status and employee can be different
    // get descritption, status and employee from update request
    const newDescription = req.body.description;
    const newStatus = req.body.status;
    const newEmployee = req.body.employee;

    // destructure from existing job record
    const { description, status, employee, history, date } = job;

    const dateOfUpdate = Date.now();

    // create history object - made from the current update
    const historyObject = {
      description: newDescription,
      status: newStatus,
      employee: newEmployee,
      date: dateOfUpdate,
    };
    // insert object to beginning of history array
    history.unshift(historyObject);

    // build updated job object
    const updatedJobFields = {
      description: newDescription,
      status: newStatus,
      employee: newEmployee,
      history,
      date: dateOfUpdate,
    };

    // update
    job = await Job.findOneAndUpdate(
      { jobNum },
      { $set: updatedJobFields },
      { new: false }
    );

    // get reference to updated job
    const newJob = await Job.findOne({ jobNum });

    // send the fully updated job back to the client
    res.json({ msg: 'Job updated', newJob });
  } catch (err) {
    console.error(err.message);
    res.json({ msg: 'Server Error - job not updated', code: 'Fail' });
  }
});

module.exports = router;
