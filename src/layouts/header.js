import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  padding: 10px;
`;
const HeaderTitle = styled.h1`
  text-align: center;
`;

const Header = () => (
  <StyledHeader>
    <HeaderTitle>MovieO</HeaderTitle>
  </StyledHeader>
);
export default Header;
