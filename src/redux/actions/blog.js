import {
  API_ARTICLE,
  API_ARTICLES,
  GET_ARTICLES_FAIL,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLE_FAIL,
  GET_ARTICLE_SUCCESS,
} from '../constants';
import { setAlert } from './alert';
import api from '../../util/api';

export const getArticles = () => async dispatch => {
  try {
    const res = await api().get(API_ARTICLES);
    dispatch(setAlert(res.data.detail, 'success'));
    dispatch({
      type: GET_ARTICLES_SUCCESS,
      payload: { message: res.data.detail, articles: res.data.articles },
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.detail, 'error'));
    dispatch({
      type: GET_ARTICLES_FAIL,
    });
  }
};

export const getArticle = slug => async dispatch => {
  try {
    const res = await api().get(API_ARTICLE + '/' + slug);
    dispatch(setAlert(res.data.detail, 'success'));
    dispatch({
      type: GET_ARTICLE_SUCCESS,
      payload: { message: res.data.detail, article: res.data.article },
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.detail, 'error'));
    dispatch({
      type: GET_ARTICLE_FAIL,
    });
  }
};
