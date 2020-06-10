import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEmployee } from '../../actions/employeeActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const EmployeeItem = ({
  employee: { firstName, lastName, id },
  deleteEmployee,
}) => {
  const onDelete = () => {
    deleteEmployee(id);
    M.toast({ html: 'Employee deleted' });
  };
  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

EmployeeItem.propTypes = {
  employee: PropTypes.object.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

export default connect(null, { deleteEmployee })(EmployeeItem);
