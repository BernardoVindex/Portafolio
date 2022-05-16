import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'


export const StyledNavBar = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.colors.nav};
    @media(min-width: 600px) {
      width: 50px;
      height: 50%;
      position: fixed;
      border-bottom-left-radius: 90px;    
      align-self: flex-end;
    }
`

export const Link = styled(LinkRouter)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`