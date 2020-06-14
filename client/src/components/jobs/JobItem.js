import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteJob, setCurrent } from '../../actions/jobActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const JobItem = ({
  job,
  job: { jobNum, employee, status, date },
  deleteJob,
  setCurrent,
}) => {
  const getTextColor = () => {
    return status ? redText() : blueText();
  };

  const redText = () => 'red-text';

  const blueText = () => 'blue-text';

  const getDateString = (d) => {
    return new Date(parseInt(d)).toUTCString().slice(0, -4);
  };

  const onDelete = () => {
    deleteJob(jobNum);
    M.toast({ html: 'Job Deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-job-modal'
          className={`modal-trigger ${getTextColor()}`}
          onClick={() => setCurrent(job)}
        >
          {job.title}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{jobNum}</span> last updated by{' '}
          <span className='black-text'>{employee}</span> on{' '}
          <span className='black-text'>{getDateString(date)}</span>
        </span>
        <span className='secondary-content delete-icon' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
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
