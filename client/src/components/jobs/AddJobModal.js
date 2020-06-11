import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmployeeSelectOptions from '../employees/EmployeeSelectOptions';
import { addJob } from '../../actions/jobActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddJobModal = ({ addJob }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);
  const [employee, setEmployee] = useState('');

  const onSubmit = () => {
    if (title === '' || description === '' || employee === '') {
      // toast displayed and modal stays open
      M.toast({ html: 'Please enter a message and an employee' });
    } else {
      // form input valid
      console.log(title, description, status, employee);
      // create a new log
      const newJob = {
        title,
        description,
        status,
        employee,
        date: new Date(),
      };
      // pass new job to redux action from props
      addJob(newJob);
      M.toast({ html: `Job added by ${employee}` });
      // empty form fields i.e. reset the state
      setTitle('');
      setDescription('');
      setEmployee('');
      setStatus(false);
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
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor='title' className='active'>
              Job Title
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor='description' className='active'>
              Job Description
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
                  checked={status}
                  value={status}
                  onChange={(e) => setStatus(!status)}
                />
                <span>Set Status</span>
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
