import React, { useEffect, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import SearchBar from './components/display/SearchBar';
import ActionButton from './components/display/ActionButton';
import AddJobModal from './components/jobs/AddJobModal';
import EditJobModal from './components/jobs/EditJobModal';
import AddEmployeeModal from './components/employees/AddEmployeeModal';
import EmployeeListModal from './components/employees/EmployeeListModal';
import Jobs from './components/jobs/Jobs';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <ActionButton />
          <AddJobModal />
          <EditJobModal />
          <AddEmployeeModal />
          <EmployeeListModal />
          <Jobs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
