const express = require('express');
const router = express.Router();
const Job = require('../../models/Job');

// @route   DELETE job/update/:id
// @desc    Delete a job

router.put('/:jobNum', async (req, res) => {
  try {
    const { jobNum } = req.params;
    // attempt to find job to update
    let job = await Job.findOne({
      jobNum: jobNum,
    });
    if (!job) return res.status(404).json({ msg: 'Job not found' });

    // an update request will have description, status, employee
    // description must be different
    // status and employee can be different
    // get descritption, status and employee from update request
    const newDescription = req.body.description;
    const newStatus = req.body.status;
    const newEmployee = req.body.employee;

    // destructure from existing job record
    const { description, status, employee, history, date } = job;

    // check descriptions differ - is this needed?
    if (newDescription === description) {
      return res.status(400).json({ msg: 'A new description must be given' });
    }

    // create history object
    const historyObject = { description, status, employee, date };
    // insert object to beginning of history array
    history.unshift(historyObject);

    // build updated job object
    const updatedJobFields = {
      description: newDescription,
      status: newStatus,
      employee: newEmployee,
      history,
      date: Date.now(),
    };

    // update
    job = await Job.findOneAndUpdate(
      { jobNum },
      { $set: updatedJobFields },
      { new: false }
    );
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
