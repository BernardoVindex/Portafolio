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
`

export const ListOfItems = styled.ul`
  width: 95%;
  /* height: auto; */
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`

export const Container = styled.div`
  padding: 0 1rem;
  /* max-width: 1200px; */
  margin: 0 auto;
`