import {
  GET_TELECOM_COMPANIES_SUCCESS,
  GET_TELECOM_COMPANIES_FAIL,
  GET_TELECOM_TARIFFS_FAIL,
  GET_TELECOM_TARIFFS_SUCCESS,
} from '../constants';
const initialState = {
  loading: true,
  loadingTariffs: true,
  companies: [],
  tariffs: [],
};

export default function telecom(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TELECOM_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: payload?.companies,
      };
    case GET_TELECOM_TARIFFS_SUCCESS:
      return {
        ...state,
        loadingTariffs: false,
        tariffs: payload?.tariffs,
      };
    case GET_TELECOM_COMPANIES_FAIL:
    case GET_TELECOM_TARIFFS_FAIL:
      return {
        ...state,
        loading: false,
        loadingTariffs: false,
      };
    default:
      return state;
  }
}
