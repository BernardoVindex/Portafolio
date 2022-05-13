import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'


export const StyledNavBar = styled.nav`
  width: 100%;
  height: 60px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Link = styled(LinkRouter)`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`