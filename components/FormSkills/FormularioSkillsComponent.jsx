import Modal from "react-responsive-modal";
import { Form,Camp,Error,Buttons,CampFlex } from "./Styled";
import Empresa from "./InputComponent/Empresa";
import Sector from "./InputComponent/Sector";
import Experience from "./InputComponent/Experience";
import Skills from "./InputComponent/Skills";
import Router from "next/router";



const FormularioSkillsComponent = ({
    empresa,
    sector,
    skills,
    experience, 
    setEmpresa, 
    setSector, 
    setExperience,
    addSkills,
    removeSkills,
    handleSubmit,
    error


}) => {
    return (
      <Modal
      styles={{
        modal: {
          maxWidth: '500px',
          width: "",
          backgroundColor: "#2e2e2e98",
          borderRadius:'10px'
        },
      }}
      center
      open
      onClose={() => Router.push("/")}
    >
      <Form>
        <h1>Experience</h1>

        <Empresa empresa={empresa} setEmpresa={setEmpresa} />
        <CampFlex>
          <Sector sector={sector} setSector={setSector} />
          <Experience experience={experience} setExperience={setExperience} />
        </CampFlex>
        <Skills
          skills={skills}
          addSkills={addSkills}
          removeSkills={removeSkills}
        />
        {error && (
          <Camp>
            {" "}
            <Error>All fields are required</Error>
          </Camp>
        )}
        <Buttons type="button" onClick={handleSubmit} variant="contained">
          Save
        </Buttons>
      </Form>
    </Modal>
      );
}
 
export default FormularioSkillsComponent;