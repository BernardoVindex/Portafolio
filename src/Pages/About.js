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
            <div
              key={index}
            >
              <p>{skill.name}</p>
              <img src={`${skill.name}.jpg`}/>
            </div>
          )
        }
      </ItemContainer>
    </>
  )
}

