import { EDIT_MOVIE_REQUEST, EDIT_MOVIE_SUCCESS, EDIT_MOVIE_FAILURE } from '../constans';

export const EditMovie = (movie) => async (dispatch) => {
  dispatch({
    type: EDIT_MOVIE_REQUEST,
  });
  try {
    const l_headers = {
      'Content-Type': 'application/json',
    };
    const l_init = {
      method: 'put',
      headers: l_headers,
      body: JSON.stringify(movie),
    };
    const response = await fetch(`http://localhost:3000/myMovie/${movie.id}`, l_init);
    const data = await response.json();
    dispatch({
      type: EDIT_MOVIE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_MOVIE_FAILURE,
    });
  }
};
