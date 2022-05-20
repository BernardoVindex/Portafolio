import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'


export const StyledNavBar = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-around;
  /* width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center; */
  background: ${({ theme }) => theme.colors.nav};
    @media(min-width: 450px) {
      width: 50px;
      height: 65vh;
      display: flex;
      flex-direction: column;
      
      position: fixed;
      align-self: flex-end;
      justify-content: flex-start;

      border-bottom-left-radius: 50px;    

      row-gap: 10px;

      top: 25%;

      /* order: -1; */
      /* width: 60px;
      height: 55%;
      position: fixed;
      border-bottom-left-radius: 90px;    
      align-self: flex-end;
      flex-direction: column;
      justify-content: flex-start;
      row-gap: 20px; */
    }
`

export const Link = styled(LinkRouter)`
  /* width: 50px; */
  /* height: 50px; */
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width: 600px) {
    padding-top: 10px;
    border-top: 1px solid #ffffff;
  }
`