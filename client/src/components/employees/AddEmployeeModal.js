import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmployee } from '../../actions/employeeActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddEmployeeModal = ({ addEmployee, employees }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const getNextId = () => {
    if (employees.length === 0) {
      return 1;
    } else {
      let largest = 1;
      employees.forEach((emp) => {
        if (emp.employeeNumber > largest) {
          largest = emp.employeeNumber;
        }
      });
      // set new number to one greater than largest
      return largest + 1;
    }
  };

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      // toast displayed and modal stays open
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      const employeeNumber = getNextId();
      addEmployee({ firstName, lastName, employeeNumber });
      M.toast({ html: `${firstName} ${lastName} was added as an employee` });
      // empty fields for form i.e. reset the state
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
      <div className='modal-content'>
        <h4>New Employee</h4>

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

        <div className='row'>
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
      <div className='modal-footer'>
        {/* modal-close removed from below */}
        <a
          href='#!'
          onClick={onSubmit}
          className='btn waves-effect waves-light blue'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddEmployeeModal.propTypes = {
  addEmployee: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  employees: state.employee.employees,
});

export default connect(mapStateToProps, { addEmployee })(AddEmployeeModal);
