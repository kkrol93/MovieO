// import { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getMovieSearch } from '../../data/actions/movieSearch.action';
import Movie from '../../components/movie';

const Main = styled.main`
  max-width: 1300px;
  width: 100%;
  margin: 20px auto;
`;
const SearchInput = styled.input`
  max-width: 500px;
  width: 100%;
  margin: 10px auto;
  display: block;
  background-color: #f3f3f3;
  border: none;
  font-size: 20px;
  padding: 5px 20px;
  border-radius: 15px;
`;
const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MovieSearch = ({ movieSearch, getMovieSearch }) => {
  let timeout = null;

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
  console.log(movieSearch.searchList);
  return (
    <Main>
      <SearchInput type="text" placeholder="Search movie..." onChange={handleSearch} />
      <MovieList>
        {movieSearch.searchList
          ? movieSearch.searchList.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
          : ''}
      </MovieList>
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
