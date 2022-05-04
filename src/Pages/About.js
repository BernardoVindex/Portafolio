import { SkillsContainer } from "../components/SkillsContainer"
import { IconSkill } from "../components/IconSkill"
import { TextArea } from "../components/TextArea"

export const About = () => {
  return (
    <>
      <p>About Page</p>
      <TextArea>
        Descrición más detallada
      </TextArea>
      <p>Skills</p>
      <SkillsContainer>
        <IconSkill></IconSkill>
        <IconSkill></IconSkill>
        <IconSkill></IconSkill>
        <IconSkill></IconSkill>
        <IconSkill></IconSkill>
        <IconSkill></IconSkill>
      </SkillsContainer>
    </>
  )
}