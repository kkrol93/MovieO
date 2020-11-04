import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EditMovieRate } from '../data/actions/editMovieList.action';

const CheckWatched = ({ movie, EditMovieRate }) => {
  const handleCheck = () => {
    movie.watched = !movie.watched;
    EditMovieRate(movie);
  };

  return (
    <div>
      Watched: <input type="checkbox" onClick={handleCheck} defaultChecked={movie.watched} />
    </div>
  );
};
CheckWatched.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  EditMovieRate: PropTypes.func,
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      EditMovieRate,
    },
    dispatch,
  );
export default connect(null, mapDispatchToProps)(CheckWatched);
