const express = require('express');
const router = express.Router();
const Job = require('../../models/Job');

// @route   DELETE job/delete/:id
// @desc    Delete a job

router.delete('/:jobNum', async (req, res) => {
  try {
    const { jobNum } = req.params;
    // attempt to find job for deletion
    let job = await Job.findOne({
      jobNum: jobNum,
    });
    if (!job) return res.status(404).json({ msg: 'Job not found' });

    // remove job from database
    await Job.deleteOne({ jobNum: jobNum }, function (err) {});
    res.status(200).json({ msg: 'Job removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
