import axios from 'axios';

//Get Jobs from database
export const getJobs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get('/jobs/get-all');
    const data = res.data;

    dispatch({
      type: 'GET_JOBS',
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'JOBS_ERROR',
      payload: err.message,
    });
  }
};

export const addJob = (job) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.post('/jobs/create', job);
    const jobNum = res.data.jobNum;
    const newJob = { ...job, jobNum };
    dispatch({
      type: 'ADD_JOB',
      payload: newJob,
    });
  } catch (err) {
    dispatch({
      type: 'JOBS_ERROR',
      payload: err.message,
    });
  }
};

// Delete job from database
export const deleteJob = (jobNum) => async (dispatch) => {
  try {
    setLoading();

    await axios.delete(`/jobs/delete/${jobNum}`);

    dispatch({
      type: 'DELETE_JOB',
      payload: jobNum,
    });
  } catch (err) {
    dispatch({
      type: 'JOBS_ERROR',
      payload: err.message,
    });
  }
};

// Update job on database
export const updateJob = (job) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.put(`/jobs/update/${job.jobNum}`, job);
    const newJob = res.data;
    dispatch({
      type: 'UPDATE_JOB',
      payload: newJob,
    });
  } catch (err) {
    dispatch({
      type: 'JOBS_ERROR',
      payload: err.message,
    });
  }
};

// Search Jobs
export const searchJobs = (text) => async (dispatch) => {
  try {
    setLoading();

    // will need to add in a route for searching jobs
    // probably a get request to /jobs/search/${text}
    // const res = await axios.get(`/jobs?q=${text}`);
    // const data = res.data;

    dispatch({
      type: 'SEARCH_JOBS',
      // payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'JOBS_ERROR',
      payload: err.message,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: 'SET_LOADING',
  };
};

// Set current job
export const setCurrent = (job) => {
  return {
    type: 'SET_CURRENT',
    payload: job,
  };
};

// Clear current job
export const clearCurrent = () => {
  return {
    type: 'CLEAR_CURRENT',
  };
};
