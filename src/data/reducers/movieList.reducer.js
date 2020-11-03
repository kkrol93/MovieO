import { ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS } from '../constans';

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
        ...state,
        movieList: action.payload,
      };

    default:
      return state;
  }
}

export default movieList;
