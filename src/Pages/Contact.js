import { FaLinkedinIn, FaTwitter, FaGithub, FaBeer } from 'react-icons/fa'


import { ContactLogo } from "../components/ContactLogo"
import { ItemContainer } from "../components/ItemContainer"
import { Subtitle } from "../components/Subtitle"
import { TextArea } from "../components/TextArea"

export const Contact = () => {
  return (
    <>
      <p>Contact Page</p>
      <TextArea>Un texto acá shido</TextArea>   
      <Subtitle>Contacte me!</Subtitle>

      <ItemContainer>
        <ContactLogo>
          <FaLinkedinIn size='5rem'/>
        </ContactLogo>
      </ItemContainer>
      
    </>
  )
}