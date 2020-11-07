import { ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE } from '../constans';

export const addMovie = (id) => async (dispatch) => {
  dispatch({
    type: ADD_MOVIE_REQUEST,
  });
  try {
    let l_init = {
      method: 'GET',
    };
    // check movie exist in movielist
    const checkExist = await fetch(`http://localhost:3000/myMovie/${id}`, l_init);

    if (checkExist.status === 404) {
      try {
        let l_init = {
          method: 'GET',
        };
        // get full data of movie
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}&i=${id}&plot="full"`,
          l_init,
        );
        const data = await response.json();
        let movie = {
          ...data,
          watched: false,
          rate: 0,
          id: data.imdbID,
        };
        const l_headers = {
          'Content-Type': 'application/json',
        };
        l_init = {
          method: 'POST',
          headers: l_headers,
          body: JSON.stringify(movie),
        };
        // send data to rest api
        const responseApi = await fetch(`http://localhost:3000/myMovie`, l_init);
        const readyData = await responseApi.json();
        dispatch({
          type: ADD_MOVIE_SUCCESS,
          payload: readyData,
        });
      } catch (error) {
        window.onerror = function () {
          return false;
        };
        let info = error;
        info = 'done';
        console.log(info);
        dispatch({
          type: ADD_MOVIE_FAILURE,
          payload: error,
        });
      }
    }
  } catch (error) {
    window.onerror = function () {
      return false;
    };
    let info = error;
    info = 'done';
    console.log(info);
  }
};
