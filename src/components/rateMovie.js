import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EditMovieRate } from '../data/actions/editMovieList.action';

const RateMovie = ({ movie, EditMovieRate }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    movie.rate = value;
    EditMovieRate(movie);
  };
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      My rate:{' '}
      <select value={movie.rate} onChange={handleChange}>
        <option value="0">no rate</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
RateMovie.propTypes = {
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
export default connect(null, mapDispatchToProps)(RateMovie);
