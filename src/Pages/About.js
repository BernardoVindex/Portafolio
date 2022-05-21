import { SkilItem, ListedItem, TextArea, ListOfItems, Subtitle, Container } from '../styles/CommonComponents'

import { stack } from '../stack'

export const About = () => {
  return (
    <>
      <Container>
        <TextArea
          alt='description-text'
        >
          Siempre he sido un entusiasta de la tecnología, 
          me gusta mucho aprende cosas nuevas y recientemente me encuentro 
          indagando más sobre este enorme mundo del desarrollo web.

          Mi objetivo, por el momento, es desenvolverme en entornos
          profecionales y entregar productos útiles, llamativos e interactivos
          mientras continúo sumando más conocimientos para aplicar
          eno proyects venideros.
        </TextArea>
      </Container>
      <Subtitle>Skills</Subtitle>
              
        <ListOfItems>
          {
            stack.skills.map( (skill, index) => 
              <ListedItem
                key={index}
              >
                <SkilItem
                  alt={skill}
                  src={`${skill.name}.svg`}
                />
                <TextArea>{skill.name}</TextArea>
              </ListedItem>
            )
          }
        </ListOfItems>

    </>
  )
}

