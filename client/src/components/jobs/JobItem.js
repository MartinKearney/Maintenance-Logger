import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteJob, setCurrent } from '../../actions/jobActions';

const JobItem = ({
  job,
  job: { jobNum, employee, status, date },
  deleteJob,
  setCurrent,
}) => {
  const getBackColor = () => {
    switch (status) {
      case 'Needs Attention':
        return 'red';
      case 'In Progress':
        return 'green';
      case 'Resolved':
        return 'blue';
      default:
        return 'black';
    }
  };

  const getStatus = () => {
    switch (status) {
      case 'Needs Attention':
        return 'needs attention';
      case 'In Progress':
        return 'in progress';
      case 'Resolved':
        return 'resolved';
      default:
        return '';
    }
  };

  const getDateString = () => {
    return new Date(parseInt(date)).toUTCString().slice(0, -4);
  };

  const onDelete = () => {
    deleteJob(jobNum);
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-job-modal'
          className={`modal-trigger white-text ${getBackColor()}`}
          onClick={() => setCurrent(job)}
          style={{ padding: '2px 4px' }}
        >
          {job.title}
        </a>
        <span className='grey-text'> ({getStatus()})</span>
        <br />
        <span className='black-text'>
          Last updated by <span className='black-text'>{employee}</span> on{' '}
          <span className='black-text'>{getDateString()}</span>
        </span>
        <span className='secondary-content delete-icon' onClick={onDelete}>
          <i className='material-icons grey-text'>delete_forever</i>
        </span>
      </div>
    </li>
  );
};

JobItem.propTypes = {
  job: PropTypes.object.isRequired,
  deleteJob: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteJob, setCurrent })(JobItem);
