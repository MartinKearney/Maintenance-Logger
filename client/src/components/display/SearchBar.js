import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchJobs, getJobs } from '../../actions/jobActions';

const Searchbar = ({ searchJobs, getJobs }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    if (e.target.value === '') {
      getJobs();
    }
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== '') {
      searchJobs(text);
    }
  };

  // const onClickClose = () => {
  //   setText('');
  // };

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form onSubmit={onSubmit}>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search logs...'
              value={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            {/* <i className='material-icons' onClick={onClickClose}>
              close
            </i> */}
          </div>
        </form>
      </div>
    </nav>
  );
};

Searchbar.propTypes = {
  searchJobs: PropTypes.func.isRequired,
  getJobs: PropTypes.func.isRequired,
};

export default connect(null, { searchJobs, getJobs })(Searchbar);
