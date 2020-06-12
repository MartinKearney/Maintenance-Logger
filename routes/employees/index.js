const EmployeesRouter = require('express').Router();

EmployeesRouter.use('/create', require('./create'));
EmployeesRouter.use('/delete', require('./delete'));
EmployeesRouter.use('/get-all', require('./get-all'));

module.exports = EmployeesRouter;
