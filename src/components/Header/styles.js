import styled from 'styled-components'

export const HeaderStyled = styled.header`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.nav};
  @media(min-width: 450px) {      
      width: 50px;
      min-height: 125px;
      height: 15vh;
      align-self: flex-start;
      position: fixed;
    }
`
