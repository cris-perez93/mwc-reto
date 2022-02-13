import { ContainerGeneral, AvatarEdit } from "./Styled";
import CardProfile from "./Components/CardProfile/CardProfile";
import CardSkills from "./components/CardSkills/CardSkills";

const VistaProfileComponent = ({
  onClickEditarDatos,
  name,
  description,
  country,
  city,
  email,
  empresa,
  sector,
  results,
  skills,
}) => {
  return (
    <ContainerGeneral>
      <AvatarEdit src={results[0].picture.medium} />
      <CardProfile
        name={name}
        description={description}
        country={country}
        city={city}
        email={email}
        empresa={empresa}
        sector={sector}
        results={results}
        onClickEditarDatos={onClickEditarDatos}
      />

      <CardSkills skills={skills} />
    </ContainerGeneral>
  );
};

export default VistaProfileComponent;
