import { combineReducers } from 'redux';
import alert from './alert';
import telecom from './telecom';
import banking from './banking';
import blog from './blog';

export default combineReducers({
  alert,
  telecom,
  banking,
  blog,
});
