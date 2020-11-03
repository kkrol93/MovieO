import { GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS } from '../constans';

const initialState = {
  searchList: [],
};

function movieSearch(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_REQUEST:
      return {
        ...state,
      };
    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        searchList: action.payload,
      };

    default:
      return state;
  }
}

export default movieSearch;
