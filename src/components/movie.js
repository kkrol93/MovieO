import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMovie } from '../data/actions/movieList.action';
import { removeMovie } from '../data/actions/removeMovieList.action';
import RateMovie from './rateMovie';
import CheckWatched from './checkWatched';

const StyledMovie = styled.div`
  max-width: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px;
`;
const MovieImage = styled.img`
  max-width: 250px;
  height: 300px;
  object-fit: cover;

  width: 100%;
`;

const MovieDescription = styled.div`
  padding: 20px 0;
`;
const MovieTitle = styled.h3`
  text-align: center;
`;

const MovieYear = styled.p`
  color: #888;
  text-align: center;
`;
const MovieAdd = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: ${(props) => (props.admin ? 'red' : 'green')};
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 30px;
  font-weight: 400;
  margin: 5px auto;
  display: block;
`;

const Movie = ({ movie, addMovie, admin, removeMovie }) => {
  return (
    <StyledMovie>
      <MovieImage src={movie.Poster} alt={movie.title} />
      <MovieDescription>
        {!admin ? (
          <MovieAdd onClick={() => addMovie(movie.imdbID)}>+</MovieAdd>
        ) : (
          <div>
            <MovieAdd onClick={() => removeMovie(movie.id)} admin>
              -
            </MovieAdd>
            <RateMovie movie={movie} />
            <CheckWatched movie={movie} />
          </div>
        )}
        <MovieTitle>{movie.Title}</MovieTitle>
        <MovieYear>Year: {movie.Year}</MovieYear>
        <MovieYear>Type: {movie.Type}</MovieYear>
        {admin ? <h4>Ratings</h4> : ''}
        {admin
          ? movie.Ratings.map((rate) => (
              <div key={rate.Source}>
                <p>From: {rate.Source}</p>
                <p>Rate: {rate.Value}</p>
              </div>
            ))
          : ''}
      </MovieDescription>
    </StyledMovie>
  );
};
Movie.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  addMovie: PropTypes.func,
  removeMovie: PropTypes.func,
  admin: PropTypes.string,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addMovie,
      removeMovie,
    },
    dispatch,
  );
export default connect(null, mapDispatchToProps)(Movie);
