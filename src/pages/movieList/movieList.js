import { useEffect } from 'react';
import { Main, StyledMovieList } from '../../assets/styles/movieList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getMovieList } from '../../data/actions/getMovieList.action';
import Movie from '../../components/movie';

const Movies = ({ movieList, getMovieList }) => {
  useEffect(() => {
    getMovieList();
  }, [getMovieList]);
  const movies = movieList.movieList;
  return (
    <Main>
      <StyledMovieList>
        {movieList
          ? movies.reverse().map((movie) => <Movie key={movie.id} movie={movie} admin="true" />)
          : ''}
      </StyledMovieList>
    </Main>
  );
};

Movies.propTypes = {
  movieList: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  getMovieList: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { movieList } = state;
  return { movieList };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getMovieList,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
