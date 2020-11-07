import { useEffect } from 'react';
import Movies from '../../components/movieList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getMovieList } from '../../data/actions/getMovieList.action';

const MyMovies = ({ movieList, getMovieList }) => {
  useEffect(() => {
    getMovieList();
  }, [getMovieList]);

  return <Movies movie={movieList.movieList} />;
};

MyMovies.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MyMovies);
