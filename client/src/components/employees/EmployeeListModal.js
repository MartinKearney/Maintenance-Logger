import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getEmployees } from '../../actions/employeeActions';

// Not a good idea to use a pre-loader in a modal?
// import Preloader from '../layout/Preloader';
import EmployeeItem from './EmployeeItem';

const EmployeeListModal = ({
  employee: { employees, loading },
  getEmployees,
}) => {
  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='employee-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Employee List</h4>
        <ul className='collection'>
          {!loading &&
            employees !== null &&
            employees.map((employee) => (
              <EmployeeItem key={employee.id} employee={employee} />
            ))}
        </ul>
      </div>
    </div>
  );
};

EmployeeListModal.propTypes = {
  employee: PropTypes.object.isRequired,
  getEmployees: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  employee: state.employee,
});

export default connect(mapStateToProps, { getEmployees })(EmployeeListModal);
