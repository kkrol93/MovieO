import { Route } from 'react-router-dom';
import MainPage from '../pages/mainPage';
import MyMovies from '../pages/movieList';

const Routes = () => (
  <>
    <Route path="/" exact component={MainPage} />
    <Route path="/my-movies" component={MyMovies} />;
  </>
);
export default Routes;
