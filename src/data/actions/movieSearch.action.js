import { GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE } from '../constans';

export const getMovieSearch = () => async (dispatch) => {
  dispatch({
    type: GET_SEARCH_REQUEST,
  });
  try {
    var l_headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    var l_init = {
      method: 'GET',
      headers: l_headers,
    };
    const response = await fetch(`${process.env.API_URL}`, l_init);

    const data = await response.json();
    dispatch({
      type: GET_SEARCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SEARCH_FAILURE,
    });
  }
};
