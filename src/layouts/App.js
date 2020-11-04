import GlobalStyle from '../assets/styles/GlobalStyles';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../data/store';
import history from '../helpers/history';
import Routes from '../routes';
import Header from './header';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <GlobalStyle />
      <Header />
      <Routes />
    </Router>
  </Provider>
);

export default App;
