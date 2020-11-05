import PropTypes from 'prop-types';
import {
  MovieAdd,
  MovieDescription,
  MovieImage,
  MovieTitle,
  MovieYear,
  StyledMovie,
  AdminOption,
} from '../assets/styles/movie';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMovie } from '../data/actions/addMovieList.action';
import { removeMovie } from '../data/actions/removeMovieList.action';
import RateMovie from './rateMovie';
import CheckWatched from './checkWatched';

const Movie = ({ movie, addMovie, admin, removeMovie }) => (
  <StyledMovie>
    <MovieImage src={movie.Poster} alt={movie.title} />
    <MovieDescription>
      {!admin ? (
        <>
          <MovieAdd onClick={() => addMovie(movie.imdbID)}>+</MovieAdd>
        </>
      ) : (
        <AdminOption>
          <RateMovie movie={movie} />
          <MovieAdd onClick={() => removeMovie(movie.id)} admin>
            -
          </MovieAdd>
          <CheckWatched movie={movie} />
        </AdminOption>
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

Movie.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  addMovie: PropTypes.func,
  removeMovie: PropTypes.func,
  admin: PropTypes.bolean,
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
