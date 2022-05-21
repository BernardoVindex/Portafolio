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
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.border};
  ${props => props.toTheRight && css`
    margin: 0 0 0 auto;
  `}
`

export const TextArea = styled.p`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.text};
  ${props => props.toTheRight && css`
    margin: auto;
  `}
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
  &:hover {
      /* z-index: 2; */
      transform: scale(1.50);
      transition: transform 250ms;
  }
`

export const ListOfItems = styled.ul`
  width: 95%;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: baseline;
  align-items: center;
  /* justify-self: center; */
  gap: 20px;
    @media(min-width: 450px) {
      max-height: 200px;
    }
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