import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateJob } from '../../actions/jobActions';
import PropTypes from 'prop-types';
import EmployeeSelectOptions from '../employees/EmployeeSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditJobModal = ({ current, updateJob }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [employee, setEmployee] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setEmployee(current.employee);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || employee === '') {
      // toast displayed and modal stays open
      M.toast({ html: 'Please enter a message and an employee' });
    } else {
      // form input valid

      const updJob = {
        id: current.id,
        message,
        attention,
        employee,
        date: new Date(),
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

  return (
    <div id='edit-job-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit System Job</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
          Update
        </a>
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
