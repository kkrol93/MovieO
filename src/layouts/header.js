import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  width: 100%;
  padding: 10px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;
const HeaderTitle = styled.h1`
  margin-bottom: 20px;
`;
const StyledLink = styled(Link)`
  margin: 5px 10px;
  color: #000;
  font-weight: 700;
`;

const Header = () => (
  <StyledHeader>
    <HeaderTitle>MovieO</HeaderTitle>
    <StyledLink to="/">Search movie</StyledLink>
    <StyledLink to="/my-movies">My movies list</StyledLink>
  </StyledHeader>
);
export default Header;
