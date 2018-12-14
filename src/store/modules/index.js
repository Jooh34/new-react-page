import { combineReducers } from 'redux';
import post from './post';
import service from './service';

export default combineReducers({
  service,
  post,
});
