import { Camp, Label } from "../Styled";
import ButtonSkills from "../../ButtonSkills/ButtonSkills";
import { TiDelete } from "react-icons/ti";
import { ContainerTagsInput,DeleteButton, Input } from "../Styled";
import PropTypes from 'prop-types'



const Skills = ({skills,removeSkills,addSkills}) => {
    return (
        <Camp>
              
            <Label>Skills</Label>
            <ContainerTagsInput>
              <ul>
              {skills.map((skill, index) => (
                  <ButtonSkills key={index}>
                    <span>{skill}</span>
                    <DeleteButton>
                    <TiDelete onClick={() => removeSkills(index)} />
                    </DeleteButton>
                  </ButtonSkills>
                ))}
              </ul>
              <Input
                type="text"
                placeholder="Press enter to add skills"
                onKeyUp={addSkills}
              />
            </ContainerTagsInput>
            
          </Camp>
      );
}
Skills.propTypes = {
  skills: PropTypes.array.isRequired,
  removeSkills: PropTypes.func.isRequired,
  addSkills:PropTypes.func.isRequired
}
 
export default Skills;