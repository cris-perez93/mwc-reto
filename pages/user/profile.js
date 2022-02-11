import FormularioDatos from "../../components/FormDatos/FormularioDatos";
import Layout from "../../Layout/Layout";
import VistaProfile from "../../components/VistaProfile/VistaProfile";



export async function getStaticProps() {
  const res = await fetch('https://randomuser.me/api/')
  const photo = await res.json()

  const {results} = photo

  return {
    props:{
      results,
    },
  }
}




const EditDatos = ({results}) => {
    return (
      <Layout>
        <VistaProfile results={results}/>
      </Layout>
      );
}
 
export default EditDatos;