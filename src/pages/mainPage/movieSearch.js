import styled from 'styled-components';

const Main = styled.main`
  max-width: 1300px;
  width: 100%;
  margin: 20px auto;
`;
const SearchInput = styled.input`
  max-width: 500px;
  width: 100%;
  margin: 10px auto;
  display: block;
  background-color: #f3f3f3;
  border: none;
  font-size: 20px;
  padding: 5px 20px;
  border-radius: 15px;
`;

const MovieSearch = () => {
  return (
    <Main>
      <SearchInput type="text" placeholder="Search movie..." />
    </Main>
  );
};
export default MovieSearch;
