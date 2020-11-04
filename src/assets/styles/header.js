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

export { StyledHeader, StyledLink, HeaderTitle };
