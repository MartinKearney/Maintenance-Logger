const initialState = {
  jobs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_JOBS':
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    case 'ADD_JOB':
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
        loading: false,
      };
    case 'DELETE_JOB':
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
        loading: false,
      };
    case 'UPDATE_JOB':
      return {
        ...state,
        jobs: state.jobs.map((job) =>
          job.id === action.payload.id ? action.payload : job
        ),
        loading: false,
      };
    case 'SEARCH_JOBS':
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case 'SET_CURRENT':
      return {
        ...state,
        current: action.payload,
      };
    case 'CLEAR_CURRENT':
      return {
        ...state,
        current: null,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'LOGS_ERROR':
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
