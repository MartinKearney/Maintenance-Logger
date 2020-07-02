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

  const onSubmit = async () => {
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

      // empty form fields i.e. reset the state
      setTitle('');
      setDescription('');
      setEmployee('');
      setStatus('');
      resetStatusOptions();
      // close the modal
      let formModal = document.getElementById('add-job-modal');
      let instance = M.Modal.getInstance(formModal);
      instance.close();
    }
  };

  const resetStatusOptions = () => {
    let options = [...document.getElementsByClassName('status-option')];
    options.forEach((op) => {
      if (op.checked) {
        op.checked = false;
      }
    });
  };

  return (
    <div id='add-job-modal' className='modal' style={modalStyle}>
      <div className='modal-content' style={{ paddingBottom: '0' }}>
        <h4 style={{ marginBottom: '30px' }}>Add New Log</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor='title' className='active'>
              Log Title
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
              Log Description
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

        <div className='row' style={{ marginBottom: '0' }}>
          <p style={{ marginTop: '0' }}>Status</p>
          <div
            className='input-field'
            style={{ marginBottom: '0' }}
            onChange={(e) => setStatus(e.target.value)}
          >
            <span className='status-span'>
              <label>
                <input
                  type='radio'
                  className='with-gap status-option'
                  name='status'
                  value='Needs Attention'
                />
                <span>Needs Attention</span>
              </label>
            </span>
            <span className='status-span'>
              <label>
                <input
                  type='radio'
                  className='with-gap status-option'
                  name='status'
                  value='In Progress'
                />
                <span>In Progress</span>
              </label>
            </span>
            <span className='status-span'>
              <label>
                <input
                  type='radio'
                  className='with-gap status-option'
                  name='status'
                  value='Resolved'
                />
                <span>Resolved</span>
              </label>
            </span>
          </div>
        </div>
      </div>
      <div className='modal-footer' style={{ padding: '0 10px 10px' }}>
        <span
          onClick={onSubmit}
          className='btn waves-effect waves-light blue'
          style={{ marginBottom: '0' }}
        >
          Add Log
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
