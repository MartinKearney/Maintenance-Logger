const express = require('express');
const router = express.Router();
const Job = require('../../models/Job');

// @route     Post /jobs/create
// @desc      Create a new job record

router.post('/', async (req, res) => {
  // Destrcuture request
  const { title, description, status, employee } = req.body;
  let jobNum, newJob;
  try {
    // check if job already exists? maybe not needed!

    // construct remaining fields for job creation
    const history = [];

    // get all jobs
    const jobs = await Job.find();

    // if none then number is 1
    if (jobs.length === 0) {
      jobNum = 1;
    }
    // else loop through all jobs to find largest
    else {
      let largest = 1;
      jobs.forEach((jb) => {
        if (jb.jobNum > largest) {
          largest = jb.jobNum;
        }
      });
      // set new number to one greater than largest
      jobNum = largest + 1;
    }

    // create a new document 'job' by using the model 'Job'
    job = new Job({
      title,
      description,
      status,
      employee,
      history,
      jobNum,
    });

    // now want to complete info for first history item
    const firstHistory = { description, status, employee, date: job.date };
    job.history.unshift(firstHistory);

    // save the document to the db
    newJob = await job.save();
    // date = res.date;
  } catch (err) {
    console.error(err.message);
    res.send('Job not added due to server error');
  }
  return res.json({ msg: 'New job created', job: newJob });
});

module.exports = router;
