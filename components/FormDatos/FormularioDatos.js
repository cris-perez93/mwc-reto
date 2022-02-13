import { useState, useContext, Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import DataContext from './../../Context/DataContext'
import FormularioDatosComponent from "./FormularioDatosComponent";


const FormularioDatos =({countries}) => {

  //state para formulario datos.
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("Spain");
  const [city, setCity] = useState("Barcelona");
  const [error, setError] = useState(false);

  //extraemos state de context.
  const { setAllData, alldata, edit } = useContext(DataContext);


  // useeffect para rellenar el form si queremos editar.
  useEffect(() => {
    if (Object.keys(alldata).length > 0) {
      setEmail(alldata.email);
      setName(alldata.name);
      setDescription(alldata.description);
      setCountry(alldata.country);
      setCity(alldata.city);
    }
  }, [alldata]);

  const router = useRouter();



  const handleSubmit = (e) => {
    e.preventDefault();
    //validación
    if ([email, name, description, country, city].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    //set state en objetData , para luego guardarlo en el context.
    const objetoData = {
      email,
      name,
      description,
      country,
      city,
    };
    setAllData(objetoData);

    // booleano que viene del componente cardprofile, para editar datos.
    if (edit) {
      router.push("/user/profile");
    } else {
      router.push("/user/edit-skills");
    }
  };

  return (
    <FormularioDatosComponent
        error={error} 
        email={email}
        name={name}
        description={description}
        country={country}
        countries={countries}
        city={city}
        setName={setName}
        setError={setError}
        setEmail={setEmail}
        setDescription={setDescription}
        setCountry={setCountry}
        setCity={setCity}
        handleSubmit={handleSubmit}
        />
  );
}


 
export default FormularioDatos;