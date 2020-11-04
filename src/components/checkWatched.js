import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EditMovie } from '../data/actions/editMovieList.action';
import { StyledCheckWatched } from '../assets/styles/adminElements';

const CheckWatched = ({ movie, EditMovie }) => {
  const handleCheck = () => {
    movie.watched = !movie.watched;
    EditMovie(movie);
  };

  return (
    <StyledCheckWatched>
      Watched: <input type="checkbox" onClick={handleCheck} defaultChecked={movie.watched} />
    </StyledCheckWatched>
  );
};
CheckWatched.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  EditMovie: PropTypes.func,
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      EditMovie,
    },
    dispatch,
  );
export default connect(null, mapDispatchToProps)(CheckWatched);
