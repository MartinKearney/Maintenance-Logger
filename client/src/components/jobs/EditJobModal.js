import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateJob } from '../../actions/jobActions';
import PropTypes from 'prop-types';
import EmployeeSelectOptions from '../employees/EmployeeSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditJobModal = ({ current, updateJob }) => {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [employee, setEmployee] = useState('');

  useEffect(() => {
    if (current) {
      setStatus(current.status);
      setStatusOption();
    }
  }, [current]);

  const onSubmit = () => {
    if (description === '') {
      M.toast({ html: 'Please enter an updated description' });
    } else if (
      description.toLowerCase() === current.history[0].description.toLowerCase()
    ) {
      M.toast({ html: 'Please enter a new description' });
    } else if (employee === '') {
      M.toast({ html: 'Please enter an employee' });
    } else {
      // form input valid
      const updJob = {
        jobNum: current.jobNum,
        description,
        status,
        employee,
      };
      updateJob(updJob);

      // reset the state
      setDescription('');
      setEmployee('');

      // close the modal
      let formModal = document.getElementById('edit-job-modal');
      let instance = M.Modal.getInstance(formModal);
      instance.close();
    }
  };

  const setStatusOption = () => {
    let options = [...document.getElementsByClassName('status-option')];
    options.forEach((op) => {
      op.checked = false;
    });
  };

  const getDateString = (d) => {
    const rawDate = new Date(parseInt(d)).toUTCString();
    return rawDate.slice(0, -13) + ' at ' + rawDate.slice(-12);
  };

  return (
    <div id='edit-job-modal' className='modal' style={modalStyle}>
      <div className='modal-content' style={{ paddingBottom: '0' }}>
        <h4>Update Log Details</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='description'
              value={description}
              placeholder='Enter an updated description'
              ref={(input) => input && input.focus()}
              onChange={(e) => setDescription(e.target.value)}
            />
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
          <p style={{ marginTop: '0' }}>Set Updated Status</p>
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
          Update Log
        </span>
      </div>
      <div className='row' style={{ margin: '1rem' }}>
        <ul className='collection with-header'>
          <li className='collection-header'>
            <h5>{current && current.title} - Log History</h5>
          </li>
          {current &&
            current.history.map((item) => {
              return (
                <li className='collection-item' key={item.date}>
                  --&gt;{' '}
                  <span style={{ fontWeight: 'bold' }}>{item.description}</span>{' '}
                  <span className='black-text'>
                    - Updated by {item.employee}
                  </span>{' '}
                  on{' '}
                  <span className='black-text'>{getDateString(item.date)}</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

const modalStyle = {
  height: 'auto',
  width: '75%',
};

EditJobModal.propTypes = {
  current: PropTypes.object,
  updateJob: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.job.current,
});

export default connect(mapStateToProps, { updateJob })(EditJobModal);
