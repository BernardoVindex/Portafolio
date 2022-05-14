import styled from 'styled-components'

export const HeaderStyled = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.nav};
  position: fixed;
  z-index: 10;
  top: 0;
`
