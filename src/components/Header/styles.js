import styled from 'styled-components'

export const HeaderStyled = styled.header`
  width: 100%;
  height: 50px;
  padding: 5px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.nav};
  @media(min-width: 600px) {
      width: 60px;
      height: 15%;
      position: fixed;
      border-top-left-radius: 90px;    
      align-self: flex-start;
    }
`
