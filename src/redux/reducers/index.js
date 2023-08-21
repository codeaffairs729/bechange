import { combineReducers } from 'redux';
import alert from './alert';
import telecom from './telecom';

export default combineReducers({
  alert,
  telecom,
});
