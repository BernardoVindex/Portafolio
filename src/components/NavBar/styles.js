import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'


export const StyledNavBar = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.nav};
  position: fixed;
  right: 0;
  z-index: 10;
  bottom: 0;
  left: 0;
`

export const Link = styled(LinkRouter)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`