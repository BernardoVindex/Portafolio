import { StyledNavBar, Link } from './styles'
import { ImHome, ImUser, ImBriefcase, ImMail2 } from 'react-icons/Im'


export const NavBar = () => {
  return (
    <StyledNavBar>
      <Link to='/'>
        <ImHome size="4rem"/>
      </Link>
      <Link to='/about'>
        <ImUser size="4rem"/>
      </Link>
      <Link to='/proyects'>
        <ImBriefcase size="4rem"/>
      </Link>
      <Link to='/contact'>
        <ImMail2 size="4rem"/>
      </Link>
    </StyledNavBar>
  )
}