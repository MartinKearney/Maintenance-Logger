import axios from 'axios';

// Get employees from database
export const getEmployees = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get('/employees');
    const data = res.data;

    dispatch({
      type: 'GET_EMPLOYEES',
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'EMPLOYEES_ERROR',
      payload: err.response.statusText,
    });
  }
};

// Add employee to database
export const addEmployee = ({ firstName, lastName, employeeNumber }) => async (
  dispatch
) => {
  try {
    setLoading();

    await axios.post('/employee/create', {
      firstName,
      lastName,
      employeeNumber,
    });

    dispatch({
      type: 'ADD_EMPLOYEE',
      payload: { firstName, lastName, employeeNumber },
    });
  } catch (err) {
    dispatch({
      type: 'EMPLOYEES_ERROR',
      payload: err.response.statusText,
    });
  }
};

// Delete employee from database
export const deleteEmployee = (employeeNumber) => async (dispatch) => {
  try {
    setLoading();

    await axios.delete(`/employee/delete/${employeeNumber}`);

    dispatch({
      type: 'DELETE_EMPLOYEE',
      payload: employeeNumber,
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
