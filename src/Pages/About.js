import { ItemContainer } from '../components/ItemContainer'
import { IconSkill } from "../components/IconSkill"
import { TextArea } from "../components/TextArea"
import { Subtitle } from "../components/Subtitle"

import { stack } from '../stack'

const html = './assets/html.svg'

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
              <img src={require('../assets/images/HTML5.jpg')}/>
            </div>
          )
        }
      </ItemContainer>
    </>
  )
}

