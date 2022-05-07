import styled, { css }  from "styled-components";



export const StyledContainer = styled.ul`
  width: 90%;
  border: 1px solid black;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
`

