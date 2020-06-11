const initialState = {
  employees: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EMPLOYEES':
      return {
        ...state,
        employees: action.payload,
        loading: false,
      };
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: [...state.employees, action.payload],
        loading: false,
      };
    case 'DELETE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => emp.employeeNumber !== action.payload
        ),
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'EMPLOYEES_ERROR':
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
