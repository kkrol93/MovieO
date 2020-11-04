import { GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE } from '../constans';

export const getMovieList = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIE_REQUEST,
  });
  try {
    var l_headers = {};
    var l_init = {
      method: 'GET',
      headers: l_headers,
    };
    const response = await fetch(`http://localhost:3000/myMovie`, l_init);
    const data = await response.json();
    dispatch({
      type: GET_MOVIE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIE_FAILURE,
    });
  }
};
