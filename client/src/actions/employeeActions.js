import axios from 'axios';

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
      payload: err.response.statusText,
    });
  }
};

// Add employee to database
export const addEmployee = (employee) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.post('/employees/create', employee);
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
      payload: err.response.statusText,
    });
  }
};

// Delete employee from database
export const deleteEmployee = (employeeNumber) => async (dispatch) => {
  try {
    setLoading();

    await axios.delete(`/employees/delete/${employeeNumber}`);

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
