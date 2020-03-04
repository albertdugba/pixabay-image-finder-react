import styled from "styled-components";

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 80%;
`;

export const GlobalStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 0.5rem;
  grid-gap: 1rem;
  position: relative;
  margin-top: 90px;
`;

export const SearchBar = styled.div`
  input {
    max-width: 1140px;
    margin: 0 auto;
    width: 80%;
    height: 32px;
    border: 1.2px solid blue;
    border-radius: 4px;
    padding-left: 10px;

    &:focus {
      border: 2px solid red;
    }
  }
`;
