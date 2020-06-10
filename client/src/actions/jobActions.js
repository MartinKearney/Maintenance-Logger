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
