import { StyledNavBar, Link } from './styles'

export const NavBar = () => {
  return (
    <StyledNavBar>
      <Link to='/'></Link>
      <Link to='/about'></Link>
      <Link to='/proyects'></Link>
      <Link to='/contact'></Link>
    </StyledNavBar>
  )
}