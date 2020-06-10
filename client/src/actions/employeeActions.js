// Get employees from database
export const getEmployees = () => async (dispatch) => {
  try {
    setLoading();

    // const res = await fetch("/techs");
    // const data = await res.json();

    dispatch({
      type: 'GET_EMPLOYEES',
      // payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'EMPLOYEES_ERROR',
      payload: err.response.statusText,
    });
  }
};

// Add employee to database
export const addEmployee = (employee) => async (dispatch) => {
  try {
    setLoading();

    // const res = await fetch("/techs", {
    //   method: "POST",
    //   body: JSON.stringify(tech),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await res.json();

    dispatch({
      type: 'ADD_EMPLOYEE',
      // payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'EMPLOYEES_ERROR',
      payload: err.response.statusText,
    });
  }
};

// Delete employee from database
export const deleteEmployee = (id) => async (dispatch) => {
  try {
    setLoading();

    // await fetch(`/techs/${id}`, {
    //   method: "DELETE",
    // });

    dispatch({
      type: 'DELETE_EMPLOYEE',
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: 'EMPLOYEE_ERROR',
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
