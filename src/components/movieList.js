import { Main, StyledMovieList } from '../assets/styles/movieList';
import PropTypes from 'prop-types';
import Movie from './movie';
import InputSearch from './inputSearchMovie';

const Movies = ({ movie, search }) => {
  return (
    <Main>
      {search ? <InputSearch /> : ''}
      <StyledMovieList>
        {movie
          ? movie
              .reverse()
              .map((movie) => <Movie key={movie.imdbID} movie={movie} admin={!search} />)
          : ''}
      </StyledMovieList>
    </Main>
  );
};

Movies.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  search: PropTypes.any,
};

export default Movies;
