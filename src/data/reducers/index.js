import { combineReducers } from 'redux';
import movieSearch from './movieSearch.reducer';
import movieList from './movieList.reducer';

const rootReducer = combineReducers({
  movieSearch,
  movieList,
});

export default rootReducer;
