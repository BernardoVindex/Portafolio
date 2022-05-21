import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'

import { ListOfItems, ListedItem, Subtitle, TextArea } from '../styles/CommonComponents'

export const Contact = () => {
  return (
    <>
      <Subtitle>Pongámonos en contato</Subtitle>
      <TextArea>
        Puedes encontrarme atraves de cualquiera de estas redes,
        me encatará saber en que puedo ayudarte.
      </TextArea>
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
    </>
  )
}