
import ButtonSkills from "../../../ButtonSkills/ButtonSkills";
import Link from "next/link";
import { FiEdit2 } from "react-icons/fi";
import { ContainerSkills, Edit, List } from "./Styled";
import { ContainerExperience } from "../../Styled";

const CardSkills = ({skills}) => {
    return (
        <ContainerExperience>
        <ContainerSkills>
          <h3>SKILLS</h3>

          <List>
            {skills.map((tag,index) => (
              <ButtonSkills key={index}>{tag}</ButtonSkills>
            ))}
          </List>
          <Link href="/user/edit-skills">
            <a><Edit>
              <FiEdit2 />
            </Edit></a>
          </Link>
        </ContainerSkills>
      </ContainerExperience>
      );
}
 
export default CardSkills;