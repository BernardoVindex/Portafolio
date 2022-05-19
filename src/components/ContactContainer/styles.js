import styled from 'styled-components'

export const StyledContainerLogo = styled.div`
  height: fit-content;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  padding: 15px 30px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.nav};  
`