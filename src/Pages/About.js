import { ItemContainer } from '../components/ItemContainer'
import { IconSkill } from "../components/IconSkill"
import { TextArea } from "../components/TextArea"
import { Subtitle } from "../components/Subtitle"

export const About = () => {
  return (
    <>
      <p>About Page</p>
      <TextArea>
        Descrición más detallada
      </TextArea>
      <Subtitle>Skills</Subtitle>
      <ItemContainer>
        <IconSkill></IconSkill>
        <IconSkill></IconSkill>
        <IconSkill></IconSkill>
        <IconSkill></IconSkill>
        <IconSkill></IconSkill>
        <IconSkill></IconSkill>
      </ItemContainer>
    </>
  )
}