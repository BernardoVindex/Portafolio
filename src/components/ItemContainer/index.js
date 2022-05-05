import { StyledContainer } from "../ItemContainer/styles"

export const ItemContainer = ({ children }) => {
  return(
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}