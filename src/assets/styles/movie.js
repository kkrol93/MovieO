import styled from 'styled-components';

const StyledMovie = styled.div`
  max-width: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px;
`;
const MovieImage = styled.img`
  max-width: 250px;
  height: 300px;
  object-fit: cover;
  width: 100%;
`;

const MovieDescription = styled.div`
  padding: 20px 0;
`;
const MovieTitle = styled.h3`
  text-align: center;
`;

const MovieYear = styled.p`
  color: #888;
  text-align: center;
`;
const AdminOption = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0 20px;
`;
const MovieAdd = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: ${(props) => (props.admin ? 'red' : 'green')};
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 30px;
  font-weight: 400;
  margin: 5px auto;
  display: block;
  cursor: pointer;
`;

export { MovieAdd, MovieDescription, MovieImage, MovieTitle, MovieYear, StyledMovie, AdminOption };
