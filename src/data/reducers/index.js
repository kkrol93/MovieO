import { combineReducers } from 'redux';
import movieSearch from './movieSearch.reducer';

const rootReducer = combineReducers({
  movieSearch,
});

export default rootReducer;
