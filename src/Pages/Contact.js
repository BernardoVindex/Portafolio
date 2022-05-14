import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'

import { ListedItem, Subtitle } from '../styles/CommonComponents'

import { ContactLogo } from "../components/ContactLogo"
import { ItemContainer } from "../components/ItemContainer"
import { TextArea } from "../components/TextArea"

export const Contact = () => {
  return (
    <>
      <Subtitle>Contacte me!</Subtitle>
      <ItemContainer>
        <ListedItem>
          <FaLinkedinIn size='5rem'/>
        </ListedItem>
        <ListedItem>
          <FaGithub size='5rem'/>
        </ListedItem>
        <ListedItem>
          <FaWhatsapp size='5rem'/>
        </ListedItem>
        <ListedItem>
          <CgMail size='5rem'/>
        </ListedItem>
      </ItemContainer>
      <TextArea>Un texto acá shido</TextArea>   
    </>
  )
}