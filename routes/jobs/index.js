const JobsRouter = require('express').Router();

JobsRouter.use('/create', require('./create'));
JobsRouter.use('/delete', require('./delete'));
JobsRouter.use('/get-all', require('./get-all'));
JobsRouter.use('/search', require('./search'));
JobsRouter.use('/update', require('./update'));

module.exports = JobsRouter;
