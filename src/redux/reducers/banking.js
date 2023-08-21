import {
  GET_BANKING_TARIFFS_FAIL,
  GET_BANKING_TARIFFS_SUCCESS,
  GET_BANKS_FAIL,
  GET_BANKS_SUCCESS,
} from '../constants';
const initialState = {
  loading: true,
  loadingBankTariffs: true,
  banks: [],
  tariffs: [],
};

export default function banking(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BANKS_SUCCESS:
      return {
        ...state,
        loading: false,
        banks: payload?.banks,
      };
    case GET_BANKING_TARIFFS_SUCCESS:
      return {
        ...state,
        loadingBankTariffs: false,
        tariffs: payload?.tariffs,
      };
    case GET_BANKS_FAIL:
    case GET_BANKING_TARIFFS_FAIL:
      return {
        ...state,
        loading: false,
        loadingBankTariffs: false,
      };
    default:
      return state;
  }
}
