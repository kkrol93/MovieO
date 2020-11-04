import { GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE } from '../constans';

export const getMovieSearch = (search) => async (dispatch) => {
  dispatch({
    type: GET_SEARCH_REQUEST,
  });
  try {
    var l_headers = {};
    var l_init = {
      method: 'GET',
      headers: l_headers,
    };
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}&s=${search}&page=1&plot="full"`,
      l_init,
    );
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
