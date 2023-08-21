import {
  GET_TELECOM_COMPANIES_SUCCESS,
  GET_TELECOM_COMPANIES_FAIL,
} from '../constants';
const initialState = {
  loading: true,
  companies: [],
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
    case GET_TELECOM_COMPANIES_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
