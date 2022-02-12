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
        modal: { maxWidth: "90%", width: "", backgroundColor: "#2e2e2e98" },
      }}
      center
      open
      onClose={() => Router.push("/")}
    >
      <Form>
        <h1>Experiencia</h1>

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
            <Error>Rellena todos los campos</Error>
          </Camp>
        )}
        <Buttons type="button" onClick={handleSubmit} variant="contained">
          Guardar
        </Buttons>
      </Form>
    </Modal>
      );
}
 
export default FormularioSkillsComponent;