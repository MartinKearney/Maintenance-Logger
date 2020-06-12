const IndexRouter = require('express').Router();

IndexRouter.use('/employees', require('./employees'));
IndexRouter.use('/jobs', require('./jobs'));

module.exports = IndexRouter;
