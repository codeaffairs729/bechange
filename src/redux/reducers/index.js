import { combineReducers } from 'redux';
import alert from './alert';
import telecom from './telecom';
import banking from './banking';

export default combineReducers({
  alert,
  telecom,
  banking,
});
