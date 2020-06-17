import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEmployee } from '../../actions/employeeActions';

const EmployeeItem = ({
  employee: { firstName, lastName, employeeNumber },
  deleteEmployee,
}) => {
  const onDelete = () => {
    deleteEmployee(employeeNumber);
  };
  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <span className='secondary-content delete-icon' onClick={onDelete}>
          <i className='material-icons grey-text'>delete_forever</i>
        </span>
      </div>
    </li>
  );
};

EmployeeItem.propTypes = {
  employee: PropTypes.object.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

export default connect(null, { deleteEmployee })(EmployeeItem);
