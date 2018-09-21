import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import rootReducer from './reducers';
import Routes from './Routes';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store = {store}>
    <Routes />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
