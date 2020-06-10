import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmployeeSelectOptions from '../employees/EmployeeSelectOptions';
import { addJob } from '../../actions/jobActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddJobModal = ({ addJob }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [employee, setEmployee] = useState('');

  const onSubmit = () => {
    if (message === '' || employee === '') {
      // toast displayed and modal stays open
      M.toast({ html: 'Please enter a message and an employee' });
    } else {
      // form input valid
      console.log(message, employee, attention);
      // create a new log
      const newJob = {
        message,
        attention,
        employee,
        date: new Date(),
      };
      // pass new job to redux action from props
      addJob(newJob);
      M.toast({ html: `Job added by ${employee}` });
      // empty form fields i.e. reset the state
      setMessage('');
      setEmployee('');
      setAttention(false);
      // close the modal
      let formModal = document.getElementById('add-job-modal');
      let instance = M.Modal.getInstance(formModal);
      instance.close();
    }
  };

  return (
    <div id='add-job-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Job</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Job Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='employee'
              value={employee}
              className='browser-default'
              onChange={(e) => setEmployee(e.target.value)}
            >
              <option value='' disabled>
                Select Employee
              </option>
              <EmployeeSelectOptions />
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  height: 'auto',
  width: '75%',
};

AddJobModal.propTypes = {
  addJob: PropTypes.func.isRequired,
};

export default connect(null, { addJob })(AddJobModal);
