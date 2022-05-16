import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'

import { ListOfItems, ListedItem, Subtitle } from '../styles/CommonComponents'

import { TextArea } from "../components/TextArea"

export const Contact = () => {
  return (
    <>
      <Subtitle>Contact me!</Subtitle>
      <ListOfItems>
        <ListedItem>
          <FaLinkedinIn size='3rem' color='#ffffff'/>
        </ListedItem>
        <ListedItem>
          <FaGithub size='3rem' color='#ffffff'/>
        </ListedItem>
        <ListedItem>
          <FaWhatsapp size='3rem' color='#ffffff'/>
        </ListedItem>
        <ListedItem>
          <CgMail size='3rem' color='#ffffff'/>
        </ListedItem>
      </ListOfItems>
      <TextArea>Un texto acá shido</TextArea>   
    </>
  )
}