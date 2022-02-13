import DataContext from "../../Context/DataContext";
import ExperienceContext from "../../Context/ExperienceContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import { Buttons } from "../FormSkills/Styled";
import VistaProfileComponent from "./VistaProfileComponent.jsx";
import Link from "next/link";


const VistaProfile = ({ results }) => {


  // extraemos el state de context
  const { alldata, edit, setEdit } = useContext(DataContext);
  const { allexperience } = useContext(ExperienceContext);

  const router = useRouter();


  
  const onClickEditarDatos = () => {
    setEdit(true);

    router.push("/");
  };

 
//extraemos los valores del state
  const { name, description, country, city, email } = alldata;
  const { empresa, sector, experience, skills } = allexperience;

  if (!skills) return (
  <div>
    <p>Error data...</p>
    <Link href='/'><a><Buttons>Return</Buttons></a></Link>
    </div>
    )

    if(!results) return <p>Loading results..</p>

  return (
    <VistaProfileComponent
    name={name}
    description={description}
    country={country}
    city={city}
    email={email}
    empresa={empresa}
    sector={sector}
    results={results}
    skills={skills}
    onClickEditarDatos={onClickEditarDatos}  
    />
  );
};

export default VistaProfile;
