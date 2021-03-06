import styled from 'styled-components'

export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 5rem;
  margin-bottom: 30px;
`

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.border};
`

export const TextArea = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
`

export const NavItem = styled.img``

export const Logo = styled.img`
  height: 4.5rem;
    @media (min-width: 600px) {
      height: 6rem;
    }
  /* margin: auto 20px;
  justify-self: center;
  align-self: center; */
`

export const SkilItem = styled.img`
  /* margin: 10px; */
  width: 100%;
  height: 100%;
`

export const ListedItem = styled.li`
  width: 50px;
  height: 50px;
  margin: calc(5% - 5px);
  text-align: center;
  align-items: center;
  &:hover {
      /* z-index: 2; */
      transform: scale(1.60);
      transition: transform 250ms;
`

export const ListOfItems = styled.ul`
  width: 95%;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  justify-self: center;

`

export const Container = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
    @media(min-width: 600px) {
          .content {
            border: 1px solid red;
            width: 100%;
            margin: 0 0 0 60px;
            /* display: flex; */
            /* flex-direction: column; */
            /* align-items: center; */
            /* justify-content: space-evenly; */
          }
    }
`