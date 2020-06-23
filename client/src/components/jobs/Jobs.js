import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Preloader from '../display/Preloader';
import JobItem from './JobItem';
import { getJobs } from '../../actions/jobActions';

const Jobs = ({ job: { jobs, loading }, getJobs }) => {
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, []);

  const getJobItemsArray = () => {
    const itemsArray = jobs.map((job) => (
      <JobItem key={job.jobNum} job={job} />
    ));
    return itemsArray;
  };

  if (loading || jobs === null) {
    return <Preloader />;
  }
  return (
    <ul className='collection with-header'>
      <li className='collection-header' style={{ backgroundColor: '#eee' }}>
        <h4 className='center' style={{ textDecoration: 'underline' }}>
          Maintenance Logs
        </h4>
      </li>
      {!loading && jobs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        getJobItemsArray()
      )}
    </ul>
  );
};

Jobs.propTypes = {
  job: PropTypes.object.isRequired,
  getJobs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  job: state.job,
});

// Alternative method
// const mapStateToProps = (state) => ({
//   jobs: state.job.jobs,
//   loading: state.job.loading
// });

export default connect(mapStateToProps, { getJobs })(Jobs);
