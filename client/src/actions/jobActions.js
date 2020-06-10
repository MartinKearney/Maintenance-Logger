//Get Jobs from database
export const getJobs = () => async (dispatch) => {
  try {
    setLoading();

    // const res = await fetch("/logs");
    // const data = await res.json();

    dispatch({
      type: 'GET_JOGS',
      // payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'JOBS_ERROR',
      payload: err.response.statusText,
    });
  }
};

// Add new job to database
export const addJob = (job) => async (dispatch) => {
  try {
    setLoading();

    // const res = await fetch("/logs", {
    //   method: "POST",
    //   body: JSON.stringify(log),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await res.json();

    dispatch({
      type: 'ADD_JOB',
      // payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'JOBS_ERROR',
      payload: err.response.statusText,
    });
  }
};

// Delete job from database
export const deleteJob = (id) => async (dispatch) => {
  try {
    setLoading();

    // await fetch(`/logs/${id}`, {
    //   method: "DELETE",
    // });

    dispatch({
      type: 'DELETE_JOB',
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: 'JOBS_ERROR',
      payload: err.response.statusText,
    });
  }
};

// Update job on database
export const updateJob = (job) => async (dispatch) => {
  try {
    setLoading();

    // const res = await fetch(`/logs/${log.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(log),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await res.json();

    dispatch({
      type: 'UPDATE_JOB',
      // payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'JOBS_ERROR',
      payload: err.response.statusText,
    });
  }
};

// Search Jobs
export const searchJobs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: 'SEARCH_JOBS',
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'JOBS_ERROR',
      payload: err.response.statusText,
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
