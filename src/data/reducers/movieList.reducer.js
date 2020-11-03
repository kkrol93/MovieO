import {
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  REMOVE_MOVIE_SUCCESS,
} from '../constans';

const initialState = {
  movieList: [],
};

function movieList(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE_REQUEST:
      return {
        ...state,
      };
    case ADD_MOVIE_SUCCESS:
      return {
        movieList: [...state, ...action.payload],
      };
    case GET_MOVIE_REQUEST:
      return {
        ...state,
      };
    case GET_MOVIE_SUCCESS:
      return {
        movieList: action.payload,
      };
    case REMOVE_MOVIE_SUCCESS:
      return {
        ...state,
        movieList: [...state.movieList.filter((movie) => movie.id !== action.payload.id)],
      };

    default:
      return state;
  }
}

export default movieList;
