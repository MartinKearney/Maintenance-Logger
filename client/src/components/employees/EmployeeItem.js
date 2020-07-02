import React from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
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
        --&gt;{' '}
        <span style={{ fontWeight: 'bold' }}>
          {firstName} {lastName}
        </span>
        <Tippy content='Delete' placement='left' delay={(250, 100)}>
          <span className='secondary-content delete-icon' onClick={onDelete}>
            <i className='material-icons grey-text'>delete</i>
          </span>
        </Tippy>
      </div>
    </li>
  );
};

EmployeeItem.propTypes = {
  employee: PropTypes.object.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

export default connect(null, { deleteEmployee })(EmployeeItem);
