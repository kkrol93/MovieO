import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMovie } from '../../../data/actions/movieList.action';

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
  background: green;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 30px;
  font-weight: 400;
  margin: 5px auto;
  display: block;
`;

const Movie = ({ movie, addMovie }) => {
  return (
    <StyledMovie>
      <MovieImage src={movie.Poster} alt={movie.title} />
      <MovieDescription>
        <MovieAdd onClick={() => addMovie(movie.imdbID)}>+</MovieAdd>
        <MovieTitle>{movie.Title}</MovieTitle>
        <MovieYear>Year: {movie.Year}</MovieYear>
        <MovieYear>Type: {movie.Type}</MovieYear>
      </MovieDescription>
    </StyledMovie>
  );
};
Movie.propTypes = {
  movie: PropTypes.array,
  addMovie: PropTypes.func,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addMovie,
    },
    dispatch,
  );
export default connect(null, mapDispatchToProps)(Movie);
