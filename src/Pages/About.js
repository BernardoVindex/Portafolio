import { ItemContainer } from '../components/ItemContainer'
import { IconSkill } from "../components/IconSkill"
import { TextArea } from "../components/TextArea"
import { Subtitle } from "../components/Subtitle"

import { stack } from '../stack'

export const About = () => {
  return (
    <>
      <p>About Page</p>
      <TextArea>
        Descrición más detallada
      </TextArea>
      <Subtitle>Skills</Subtitle>
      <ItemContainer>
        {
          stack.skills.map( (skill, index) => 
            <li
              key={index}
            >
              <img
                alt={skill}
                src={`${skill.name}.svg`}
                height='20'
              />
              <p>{skill.name}</p>
            </li>
          )
        }
      </ItemContainer>
    </>
  )
}

