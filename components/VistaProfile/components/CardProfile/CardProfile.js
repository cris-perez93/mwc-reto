import {
  ContainerHi,
  Hi,
  Description,
  CardContainer,
  Sector,
  Empresa,
  ContainerData,
  ContainerLocation,
} from "../../Styled";
import { Edit } from "../CardSkills/Styled";
//import { FiEdit2 } from "react-icons/fi";
//import { GoLocation } from "react-icons/go";
import { Avatar } from "../../Styled";
import SocialComponent from "./components/SocialComponent";

const CardProfile = ({onClickEditarDatos,results,name,email,sector,empresa,country,city,description}) => {
  return (
    <CardContainer>
      <Sector>{sector}</Sector>
      <Empresa>{empresa}</Empresa>

      <Edit onClick={onClickEditarDatos}>
        Edit
      </Edit>

      <ContainerData>
        <Avatar src={results[0].picture.large} />

        <h3>{name}</h3>
        <p>{email}</p>
        <ContainerLocation>
          
          <p>{country} /</p>
          <p>{city}</p>
        </ContainerLocation>
      </ContainerData>
      <SocialComponent/>

      <ContainerHi>
        <Hi>Hi there! ✌</Hi>
        <Description>{description}</Description>
      </ContainerHi>
    </CardContainer>
  );
};

export default CardProfile;
