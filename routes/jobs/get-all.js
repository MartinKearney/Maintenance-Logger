const express = require('express');
const router = express.Router();
const Job = require('../../models/Job');

// @route     Get /jobs/get-all
// @desc      Get all employee details

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
