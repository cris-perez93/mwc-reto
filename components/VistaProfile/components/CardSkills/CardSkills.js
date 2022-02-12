import { ContainerDescription,ContainerSkills,List, Edit } from "../../Styled";
import ButtonSkills from "../../../ButtonSkills/ButtonSkills";
import Link from "next/link";
import { FiEdit2 } from "react-icons/fi";

const CardSkills = ({skills}) => {
    return (
        <ContainerDescription>
        <ContainerSkills>
          <h3>SKILLS</h3>

          <List>
            {skills.map((tag) => (
              <ButtonSkills key={tag}>{tag}</ButtonSkills>
            ))}
          </List>
          <Link href="/user/edit-skills">
            <a><Edit>
              <FiEdit2 />
            </Edit></a>
          </Link>
        </ContainerSkills>
      </ContainerDescription>
      );
}
 
export default CardSkills;