import {
  GET_ARTICLES_FAIL,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLE_FAIL,
  GET_ARTICLE_SUCCESS,
} from '../constants';

const initialState = {
  loading: true,
  articles: [],
  article: {},
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
    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: payload?.article,
      };
    case GET_ARTICLES_FAIL:
    case GET_ARTICLE_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
