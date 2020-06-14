import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmployeeSelectOptions from '../employees/EmployeeSelectOptions';
import { addJob } from '../../actions/jobActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddJobModal = ({ addJob }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [employee, setEmployee] = useState('');

  const onSubmit = () => {
    if (title === '') {
      M.toast({ html: 'Please enter a title' });
    } else if (description === '') {
      M.toast({ html: 'Please enter a description' });
    } else if (employee === '') {
      M.toast({ html: 'Please enter an employee' });
    } else if (status === '') {
      M.toast({ html: 'Please set the status' });
    } else {
      // form input valid
      // create a new job
      const newJob = {
        title,
        description,
        employee,
        status,
      };
      // pass new job to redux action from props
      addJob(newJob);
      M.toast({ html: `Job added by ${employee}` });
      // empty form fields i.e. reset the state
      setTitle('');
      setDescription('');
      setEmployee('');
      setStatus('');
      // close the modal
      let formModal = document.getElementById('add-job-modal');
      let instance = M.Modal.getInstance(formModal);
      instance.close();
    }
  };

  return (
    <div id='add-job-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Add System Job</h4>

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

        {/* <div className='row'>
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
        </div> */}
        <div className='row'>
          <p>Set Status</p>
          <div
            className='input-field'
            onChange={(e) => setStatus(e.target.value)}
          >
            <span>
              <label>
                <input
                  type='radio'
                  className='with-gap'
                  name='status'
                  value='Needs Attention'
                />
                <span>Needs Attention</span>
              </label>
            </span>
            <span>
              <label>
                <input
                  type='radio'
                  className='with-gap'
                  name='status'
                  value='In Progress'
                />
                <span>In Progress</span>
              </label>
            </span>
            <span>
              <label>
                <input
                  type='radio'
                  className='with-gap'
                  name='status'
                  value='Resolved'
                />
                <span>Resolved</span>
              </label>
            </span>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        {/* modal-close removed from below */}
        <span onClick={onSubmit} className='btn waves-effect waves-light blue'>
          Enter
        </span>
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
