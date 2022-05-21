import styled, { css } from 'styled-components'

export const MainTitle = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.text};
  @media(min-width: 450px) {
    font-size: 6rem;
    margin: auto;
    font-size: 8.5rem;
  }
`

export const Subtitle = styled.h2`
  padding-left: 5%;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.border};
  ${props => props.toTheRight && css`
    margin: 0 0 0 auto;
  `}
    @media(min-width: 450px) {
      padding: 0;
    }
`

export const TextArea = styled.p`
  margin: 0 5%;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  ${props => props.toTheRight && css`
  `}
    @media(min-width: 450px) {
      padding: 0;
      margin: 0;
    }
`

export const NavItem = styled.img``

export const Logo = styled.img`
  height: 4.5rem;
    @media (min-width: 600px) {
      height: 6.5rem;
    }
  /* margin: auto 20px;
  justify-self: center;
  align-self: center; */
`

export const SkilItem = styled.img`
  width: 100%;
  height: 100%;
`

export const ListedItem = styled.li`
  width: 50px;
  height: 50px;
  margin: calc(2.5% - 5px);
  text-align: center;
  align-items: center;
  justify-items: center;
  text-justify:
  border: 1px solid red;
  &:hover {
      /* z-index: 2; */
      transform: scale(1.50);
      transition: transform 250ms;
  }
`

export const ListOfItems = styled.ul`
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`

export const Container = styled.div`
  /* height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly; */
    @media(min-width: 450px) {
      
      width: 100%;
      display: flex; 
      flex-direction: column;
      /* border: 1px solid red;
      width: 100%;
      margin: 0 0 0 60px; */


      /* display: flex; */
      /* flex-direction: column; */
      /* align-items: center; */
      /* justify-content: space-evenly; */
    }
`