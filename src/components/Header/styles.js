import styled from 'styled-components'

export const HeaderStyled = styled.header`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.nav};
  @media(min-width: 600px) {
      width: 50px;
      height: 25%;
      position: fixed;
      border-top-left-radius: 90px;    
      align-self: flex-start;
    }
`
