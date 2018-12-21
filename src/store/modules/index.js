import { combineReducers } from 'redux';
import post from './post';
import service from './service';

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  service,
  post,
  form: formReducer
});
