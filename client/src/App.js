import React, { useEffect, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import SearchBar from './components/display/SearchBar';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div>
          <h1>Hello Danny!</h1>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
