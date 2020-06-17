const express = require('express');
const router = express.Router();
const Job = require('../../models/Job');

// @route   GET jobs/search/:text
// @desc    Search for a job
router.get('/:text', async (req, res) => {
  try {
    const queryObj = {};
    queryObj['title'] = new RegExp(req.params.text, 'i');
    const queryObj2 = {};
    queryObj2['employee'] = new RegExp(req.params.text, 'i');

    const results = await Job.find({ $or: [queryObj, queryObj2] });
    // const results = await Job.find(queryObj);

    res.json(results);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
