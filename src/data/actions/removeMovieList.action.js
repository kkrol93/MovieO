import { REMOVE_MOVIE_SUCCESS, REMOVE_MOVIE_REQUEST, REMOVE_MOVIE_FAILURE } from '../constans';

export const removeMovie = (id) => (dispatch) => {
  dispatch({ type: REMOVE_MOVIE_REQUEST });
  try {
    let l_init = {
      method: 'DELETE',
    };
    fetch(`http://localhost:3000/myMovie/${id}`, l_init);
    dispatch({
      type: REMOVE_MOVIE_SUCCESS,
      payload: { id },
    });
  } catch (error) {
    dispatch({
      type: REMOVE_MOVIE_FAILURE,
    });
  }
};
