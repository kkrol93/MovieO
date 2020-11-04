import { EDIT_RATE_REQUEST, EDIT_RATE_SUCCESS, EDIT_RATE_FAILURE } from '../constans';

export const EditMovieRate = (movie) => async (dispatch) => {
  dispatch({
    type: EDIT_RATE_REQUEST,
  });
  try {
    console.log(movie);
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
      type: EDIT_RATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_RATE_FAILURE,
    });
  }
};
