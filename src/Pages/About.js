import { ItemContainer } from '../components/ItemContainer'
import { Subtitle } from "../components/Subtitle"

import { SkilItem, ListedItem, TextArea, ListOfItems } from '../styles/CommonComponents'

import { stack } from '../stack'

export const About = () => {
  return (
    <>
      <TextArea>
        Descrición más detallada
      </TextArea>
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

