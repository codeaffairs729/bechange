import { GET_ARTICLES_FAIL, GET_ARTICLES_SUCCESS } from '../constants';

const initialState = {
  loading: true,
  articles: [],
};

export default function blog(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: payload?.articles,
      };
    case GET_ARTICLES_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
