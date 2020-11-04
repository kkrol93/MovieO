import { ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE } from '../constans';

export const addMovie = (id) => async (dispatch) => {
  dispatch({
    type: ADD_MOVIE_REQUEST,
  });
  try {
    let l_headers = {};
    let l_init = {
      method: 'GET',
      headers: l_headers,
    };
    const response = await fetch(`${process.env.REACT_APP_API_URL}&i=${id}&plot="full"`, l_init);
    const data = await response.json();
    let movie = {
      ...data,
      watched: false,
      rate: 0,
    };
    l_headers = {
      'Content-Type': 'application/json',
    };
    l_init = {
      method: 'POST',
      headers: l_headers,
      body: JSON.stringify(movie),
    };
    const responseApi = await fetch(`http://localhost:3000/myMovie`, l_init);
    const readyData = await responseApi.json();
    dispatch({
      type: ADD_MOVIE_SUCCESS,
      payload: readyData,
    });
  } catch (error) {
    dispatch({
      type: ADD_MOVIE_FAILURE,
    });
  }
};
