import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import jobReducer from './jobReducer';

export default combineReducers({
  employee: employeeReducer,
  job: jobReducer,
});
