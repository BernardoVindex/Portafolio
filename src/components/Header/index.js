import { HeaderStyled } from "./styles"

export const Header = ({ children }) => {
  return (
    <HeaderStyled>
      {children}
    </HeaderStyled>
  )
}