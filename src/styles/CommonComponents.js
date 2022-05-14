import styled from 'styled-components'

export const MainTitle = styled.h1``

export const Subtitle = styled.h2`
  size: 30rem;
  color: ${({ theme }) => theme.colors.border};
`

export const TextArea = styled.p`
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
`

export const ListOfItems = styled.ul`
  width: 95%;
  /* height: auto; */
  border: 1px solid red;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; 
  align-items: center;
  gap: 20px;
`

export const Container = styled.div`
`