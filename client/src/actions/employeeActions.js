import axios from 'axios';

import M from 'materialize-css/dist/js/materialize.min.js';

// Get employees from database
export const getEmployees = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get('/employees/get-all');
    const data = res.data;

    dispatch({
      type: 'GET_EMPLOYEES',
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'EMPLOYEES_ERROR',
      payload: err.message,
    });
  }
};

// Add employee to database
export const addEmployee = (employee) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.post('/employees/create', employee);

    // display response message to user
    M.toast({
      html: `${res.data.msg}`,
    });
    // check if response has a code field
    if (res.data.code === 'Fail') {
      return;
    }
    // extract employee number from response
    const employeeNumber = res.data.empNum;
    // combine employee with employee number to make the new employee object
    const newEmployee = { ...employee, employeeNumber };

    dispatch({
      type: 'ADD_EMPLOYEE',
      payload: newEmployee,
    });
  } catch (err) {
    dispatch({
      type: 'EMPLOYEES_ERROR',
      payload: err.message,
    });
  }
};

// Delete employee from database
export const deleteEmployee = (employeeNumber) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.delete(`/employees/delete/${employeeNumber}`);
    // display message to user
    M.toast({
      html: `${res.data.msg}`,
    });

    dispatch({
      type: 'DELETE_EMPLOYEE',
      payload: employeeNumber,
    });
  } catch (err) {
    dispatch({
      type: 'EMPLOYEE_ERROR',
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
