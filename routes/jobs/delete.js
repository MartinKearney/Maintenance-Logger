const express = require('express');
const router = express.Router();
const Job = require('../../models/Job');

// @route   DELETE jobs/delete/:id
// @desc    Delete a job

router.delete('/:jobNum', async (req, res) => {
  try {
    const { jobNum } = req.params;
    // attempt to find job for deletion
    let job = await Job.findOne({
      jobNum: jobNum,
    });
    if (!job) return res.json({ msg: 'Job not found', code: 'Fail' });

    // remove job from database
    await Job.deleteOne({ jobNum: jobNum }, function (err) {});
    res.json({ msg: 'Job Deleted' });
  } catch (err) {
    console.error(err.message);
    res.json({ msg: 'Server Error - job not deleted', code: 'Fail' });
  }
});

module.exports = router;
