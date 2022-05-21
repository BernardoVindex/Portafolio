import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'

import { MainTitle, Subtitle, TextArea, Container, ListedItem, ListOfItems } from "../styles/CommonComponents"

import { ContactLogo } from '../components/ContactLogo'
import { ContactContainer } from '../components/ContactContainer'



export const Home = () => {
  return (
    <>
      <Container>
        {/* <TextArea>Hello!, my name is</TextArea> */}
        {/* <MainTitle>Bernardo Cárdenas</MainTitle> */}
        <Subtitle
          toTheRight
        >Frontend Developer</Subtitle>
      </Container>
  
      <ContactContainer>
        <ContactLogo>
          <FaLinkedinIn size='3.5rem' color='#ffffff'/>
        </ContactLogo>
        <ContactLogo>
          <FaGithub size='3.5rem' color='#ffffff'/>
        </ContactLogo>
        <ContactLogo>
          <FaWhatsapp size='3.5rem' color='#ffffff'/>
        </ContactLogo>
      </ContactContainer>
    </>
  )
}