import { StyledNavBar, Link } from './styles'
import { ImHome, ImUser, ImBriefcase, ImMail2 } from 'react-icons/Im'


export const NavBar = () => {
  return (
    <StyledNavBar>
      <Link to='/'>
        <ImHome size="2rem"color='#BACBD9'/>
      </Link>
      <Link to='/about'>
        <ImUser size="2rem"color='#BACBD9'/>
      </Link>
      <Link to='/proyects'>
        <ImBriefcase size="2rem"color='#BACBD9'/>
      </Link>
      <Link to='/contact'>
        <ImMail2 size="2rem"color='#BACBD9'/>
      </Link>
    </StyledNavBar>
  )
}