import styled from 'styled-components'

export const StyledContainerLogo = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  padding: 15px 30px;
  border-radius: 50px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.nav};  
`