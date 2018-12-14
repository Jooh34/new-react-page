import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import rootReducer from './store/modules';

import 'semantic-ui-css/semantic.min.css';

import Routes from './Routes';
import './index.css';

// **** 리덕스 개발자도구 적용
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);
console.log(store.getState())

ReactDOM.render(
  <Provider store = {store}>
    <Routes />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
