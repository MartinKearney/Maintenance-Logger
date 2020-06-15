import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateJob } from '../../actions/jobActions';
import PropTypes from 'prop-types';
import EmployeeSelectOptions from '../employees/EmployeeSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditJobModal = ({ current, updateJob }) => {
  // if (current) {
  //   console.log(current);
  // }
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [employee, setEmployee] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (current) {
      setTitle(current.title);
      setDescription(current.description);
      setStatus(current.status);
      setStatusOption(current.status);
      setEmployee(current.employee);
      setHistory(current.history);
    }
  }, [current]);

  const onSubmit = () => {
    if (description === '' || employee === '') {
      // toast displayed and modal stays open
      M.toast({ html: 'Please enter an updated description and an employee' });
    } else {
      // form input valid

      const updJob = {
        jobNum: current.jobNum,
        description,
        status,
        employee,
      };
      updateJob(updJob);
      M.toast({ html: `Job updated by ${employee}` });
      // empty fields for form i.e. reset the state
      // setMessage("");
      // setEmployee("");
      // setAttention(false);
      // close the modal
      let formModal = document.getElementById('edit-job-modal');
      let instance = M.Modal.getInstance(formModal);
      instance.close();
    }
  };

  const setStatusOption = (stat) => {
    let options = [...document.getElementsByClassName('status-option')];
    options.forEach((op) => {
      if (op.value === stat) {
        op.checked = true;
      }
    });
  };

  const getDateString = (d) => {
    return new Date(parseInt(d)).toUTCString().slice(0, -4);
  };

  return (
    <div id='edit-job-modal' className='modal' style={modalStyle}>
      <div className='modal-content' style={{ paddingBottom: '0' }}>
        <h4>Edit System Job</h4>
        <h5>{title}</h5>

        {/* Job History will go here */}
        <div className='row'>
          <ul className='collection with-header'>
            <li className='collection-header'>
              <h5>Job History</h5>
            </li>
            {current &&
              current.history.map((item) => {
                return (
                  <li className='collection-item' key={item.date}>
                    <span>{item.description}</span> by{' '}
                    <span className='black-text'>{item.employee}</span> on{' '}
                    <span className='black-text'>
                      {getDateString(item.date)}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='description'
              value={description}
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
          <p style={{ marginTop: '0' }}>Set Status</p>
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
      <div className='modal-footer'>
        {/* modal-close removed from below */}
        <span onClick={onSubmit} className='btn waves-effect waves-light blue'>
          Update
        </span>
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
