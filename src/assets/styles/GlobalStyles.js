import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #fff;
  color: #000;
  font-family: 'Lato', sans-serif;
  overflow-x: hidden;
}
h1,h2,h3,h4 {
    font-family: 'Montserrat', sans-serif;
    font-weight:700;
}
a {
   color: #e31d29;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
     color: #283784;
    }
  }
`;
export default GlobalStyle;
