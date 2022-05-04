import { StyledContainer } from './styles'

export const SkillsContainer = ({ children }) => {
  return (
    <StyledContainer className='skills-container'>
      {children}
    </StyledContainer>
  )
}