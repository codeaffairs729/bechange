import {
  API_TELECOM_COMPANIES,
  GET_TELECOM_COMPANIES_SUCCESS,
  GET_TELECOM_COMPANIES_FAIL,
} from '../constants';
import { setAlert } from './alert';
import api from '../../util/api';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

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
