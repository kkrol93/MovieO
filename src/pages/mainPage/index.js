import Movies from '../../components/movieList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const MainPage = ({ movieSearch }) => {
  return <Movies search movie={movieSearch.searchList} />;
};

MainPage.propTypes = {
  movieSearch: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  getMovieSearch: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { movieSearch } = state;
  return { movieSearch };
};

export default connect(mapStateToProps, null)(MainPage);
