import { Route } from 'react-router-dom';
import MainPage from '../pages/mainPage';

const Routes = () => (
  <>
    <Route path="/" exact component={MainPage} />
  </>
);
export default Routes;
