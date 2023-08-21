import {
  API_TELECOM_COMPANIES,
  GET_TELECOM_COMPANIES_SUCCESS,
  GET_TELECOM_COMPANIES_FAIL,
  API_TELECOM_TARIFFS,
  GET_TELECOM_TARIFFS_SUCCESS,
  GET_TELECOM_TARIFFS_FAIL,
  API_BANKS,
  GET_BANKS_SUCCESS,
  GET_BANKS_FAIL,
  API_BANKING_TARIFFS,
  GET_BANKING_TARIFFS_SUCCESS,
  GET_BANKING_TARIFFS_FAIL,
} from '../constants';
import { setAlert } from './alert';
import api from '../../util/api';

// const config = {
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };

export const getTelecomCompanies = () => async dispatch => {
  try {
    const res = await api().get(API_TELECOM_COMPANIES);
    dispatch(setAlert(res.data.detail, 'success'));
    dispatch({
      type: GET_TELECOM_COMPANIES_SUCCESS,
      payload: { message: res.data.detail, companies: res.data.companies },
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.detail, 'error'));
    dispatch({
      type: GET_TELECOM_COMPANIES_FAIL,
    });
  }
};

export const getTelecomTariffs = tariffCompany => async dispatch => {
  try {
    const res = await api().get(API_TELECOM_TARIFFS + '/' + tariffCompany);
    dispatch(setAlert(res.data.detail, 'success'));
    dispatch({
      type: GET_TELECOM_TARIFFS_SUCCESS,
      payload: { message: res.data.detail, tariffs: res.data.tariffs },
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.detail, 'error'));
    dispatch({
      type: GET_TELECOM_TARIFFS_FAIL,
    });
  }
};

export const getBanks = () => async dispatch => {
  try {
    const res = await api().get(API_BANKS);
    dispatch(setAlert(res.data.detail, 'success'));
    dispatch({
      type: GET_BANKS_SUCCESS,
      payload: { message: res.data.detail, banks: res.data.banks },
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.detail, 'error'));
    dispatch({
      type: GET_BANKS_FAIL,
    });
  }
};

export const getBankingTariffs = bankId => async dispatch => {
  try {
    const res = await api().get(API_BANKING_TARIFFS + '/' + bankId);
    dispatch(setAlert(res.data.detail, 'success'));
    dispatch({
      type: GET_BANKING_TARIFFS_SUCCESS,
      payload: { message: res.data.detail, tariffs: res.data.tariffs },
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.detail, 'error'));
    dispatch({
      type: GET_BANKING_TARIFFS_FAIL,
    });
  }
};
