import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import ExperienceContext from "./../../Context/ExperienceContext";
import FormularioSkillsComponent from "./FormularioSkillsComponent";

const FormularioSkills = () => {

  //state formulario experiencia
  const [empresa, setEmpresa] = useState("");
  const [sector, setSector] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState(["Reactjs", "Nodejs"]);
  const [error, setError] = useState(false);

  //extraemos state de context
  const { setAllExperience, allexperience } = useContext(ExperienceContext);

  //leemos los que hay en el state para rellenar el form auto , para editar
  useEffect(() => {
    if (Object.keys(allexperience).length > 0) {
      setEmpresa(allexperience.empresa);
      setSector(allexperience.sector);
      setExperience(allexperience.experience);
      setSkills(allexperience.skills);
    }
  }, [allexperience]);

  const router = useRouter();

  //fn para agregar skill/tags con Enter
  const addSkills = (e) => {
    if (e.key === "Enter") {
      setSkills([...skills, e.target.value]);
      e.target.value = "";
    }
  };

  // remove skills a partir de su indx
  const removeSkills = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };



  const handleSubmit = (e) => {

    //validación
    if ([empresa, sector, experience, skills].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    // set state en este objeto
    const objectExperience = {
      empresa,
      sector,
      experience,
      skills,
    };

     // luego set objeto en el context state
    setAllExperience(objectExperience);
    router.push("/user/profile");
  };

  if (!skills) return <p>Loading...</p>;

  return (
    <FormularioSkillsComponent 
         empresa={empresa}
         sector={sector}
         experience={experience}
         skills={skills}
         setEmpresa={setEmpresa}
         setSector={setSector}
         setExperience={setExperience}
         addSkills={addSkills}
         removeSkills={removeSkills}
         handleSubmit={handleSubmit}
    />
  );
};

export default FormularioSkills;
