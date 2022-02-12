import Modal from "react-responsive-modal";
import Name from "./InputComponent/Name";
import Email from "./InputComponent/Email";
import Description from "./InputComponent/Description";
import Pais from "./InputComponent/Pais";
import City from "./InputComponent/City";
import { Camp, Form , CampFlex, Buttons} from "../FormSkills/Styled";
import Router from "next/router";


const FormularioDatosComponent = ({
    name,
    email,
    description,
    country,
    city,
    setName,
    setEmail,
    setDescription,
    setCountry,
    setCity,
    error,
    handleSubmit,
    countries
}) => {

    return (
      <Modal
        styles={{
          modal: {
            maxWidth: "90%",
            width: "",
            backgroundColor: "#2e2e2e98",
          },
        }}
        center
        open
        onClose={() => Router.push("/user/profile")}
      >
        <Form onSubmit={handleSubmit}>
          <h1>Editar Perfil</h1>
          <Name name={name} setName={setName} />
          <Email email={email} setEmail={setEmail} />
          <Description
            description={description}
            setDescription={setDescription}
          />
          <CampFlex>
            <Pais countries={countries} country={country} setCountry={setCountry} />
            <City city={city} setCity={setCity} />
          </CampFlex>

          {error && (
            <Camp>
              <p>Rellena todos los campos</p>
            </Camp>
          )}

          <Buttons type="submit" variant="contained">
            Guardar
          </Buttons>
        </Form>
      </Modal>
    );
}
 
export default FormularioDatosComponent;