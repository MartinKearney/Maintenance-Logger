import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmployees } from '../../actions/employeeActions';

const EmployeeSelectOptions = ({
  getEmployees,
  employee: { employees, loading },
}) => {
  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line
  }, []);
  return (
    !loading &&
    employees !== null &&
    employees.map((emp) => (
      <option
        key={emp.employeeNumber}
        value={`${emp.firstName} ${emp.lastName}`}
      >
        {emp.firstName} {emp.lastName}
      </option>
    ))
  );
};

EmployeeSelectOptions.propTypes = {
  getEmployees: PropTypes.func.isRequired,
  employee: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  employee: state.employee,
});

export default connect(mapStateToProps, { getEmployees })(
  EmployeeSelectOptions
);
