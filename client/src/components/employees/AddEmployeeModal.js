import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmployee } from '../../actions/employeeActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddEmployeeModal = ({ addEmployee }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      // toast displayed and modal stays open
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      addEmployee({ firstName, lastName });

      // reset the state
      setFirstName('');
      setLastName('');

      // close the modal
      let formModal = document.getElementById('add-employee-modal');
      let instance = M.Modal.getInstance(formModal);
      instance.close();
    }
  };

  return (
    <div id='add-employee-modal' className='modal'>
      <div className='modal-content' style={{ paddingBottom: '0' }}>
        <h4 style={{ marginBottom: '30px' }}>Add New Employee</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row' style={{ paddingBottom: '0' }}>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer' style={{ padding: '0 10px 10px' }}>
        {/* modal-close removed from below */}
        <span
          onClick={onSubmit}
          className='btn waves-effect waves-light blue'
          style={{ marginBottom: '0' }}
        >
          Add Employee
        </span>
      </div>
    </div>
  );
};

AddEmployeeModal.propTypes = {
  addEmployee: PropTypes.func.isRequired,
};

export default connect(null, { addEmployee })(AddEmployeeModal);
