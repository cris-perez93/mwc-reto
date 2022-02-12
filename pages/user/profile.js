import Layout from "../../Layout/Layout";
import VistaProfile from "../../components/VistaProfile/VistaProfile";
import PropTypes from 'prop-types'

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

EditDatos.propTypes = {
  results: PropTypes.array.isRequired
}
 
export default EditDatos;