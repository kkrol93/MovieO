import { Main, StyledMovieList } from '../../assets/styles/movieList';
import { SearchInput } from '../../assets/styles/movieSearch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getMovieSearch } from '../../data/actions/movieSearch.action';
import Movie from '../../components/movie';

const MovieSearch = ({ movieSearch, getMovieSearch }) => {
  let timeout = null;

  // search movie function (start call to api when stop writing = 0,5s)
  const handleSearch = (e) => {
    e.preventDefault();
    clearTimeout(timeout);
    const value = e.target.value;
    if (value) {
      timeout = setTimeout(function () {
        getMovieSearch(value);
      }, 500);
    }
  };
  return (
    <Main>
      <SearchInput type="text" placeholder="Search movie..." onChange={handleSearch} />
      <StyledMovieList>
        {movieSearch.searchList
          ? movieSearch.searchList.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
          : ''}
      </StyledMovieList>
    </Main>
  );
};

MovieSearch.propTypes = {
  movieSearch: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  getMovieSearch: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { movieSearch } = state;
  return { movieSearch };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getMovieSearch,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
