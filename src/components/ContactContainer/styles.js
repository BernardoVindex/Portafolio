import styled from 'styled-components'

export const StyledContainerLogo = styled.div`
  display: flex;
  gap: 3rem;
  padding: 15px;
  border-radius: 50px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.nav};  
`