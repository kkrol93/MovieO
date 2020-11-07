import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { SearchInput } from '../assets/styles/movieSearch';
import { getMovieSearch } from '../data/actions/movieSearch.action';

const InputSearch = ({ getMovieSearch }) => {
  let timeout = null;

  // search movie function (start call to api when stop writing = 0,5s)
  const handleSearch = (e) => {
    clearTimeout(timeout);
    const value = e.target.value;
    if (value) {
      timeout = setTimeout(function () {
        getMovieSearch(value);
      }, 500);
    }
  };

  return <SearchInput type="text" placeholder="Search movie..." onChange={handleSearch} />;
};

InputSearch.propTypes = {
  getMovieSearch: PropTypes.func,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getMovieSearch,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(InputSearch);
