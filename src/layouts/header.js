import { StyledHeader, StyledLink, HeaderTitle } from '../assets/styles/header';

const Header = () => (
  <StyledHeader>
    <HeaderTitle>MovieO</HeaderTitle>
    <StyledLink to="/">Search movie</StyledLink>
    <StyledLink to="/my-movies">My movies list</StyledLink>
  </StyledHeader>
);
export default Header;
