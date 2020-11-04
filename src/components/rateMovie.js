import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EditMovie } from '../data/actions/editMovieList.action';
import { StyledRate } from '../assets/styles/adminElements';

const RateMovie = ({ movie, EditMovie }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    movie.rate = value;
    EditMovie(movie);
  };
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <StyledRate>
      My rate:{' '}
      <select value={movie.rate} onChange={handleChange}>
        <option value="0">no rate</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </StyledRate>
  );
};
RateMovie.propTypes = {
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
export default connect(null, mapDispatchToProps)(RateMovie);
