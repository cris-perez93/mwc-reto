import Layout from '../Layout/Layout'
import FormularioDatos from '../components/FormDatos/FormularioDatos'
import PropTypes from 'prop-types'





export async function getStaticProps() {
  const res = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
  const countries = await res.json()

  return {
    props:{
      countries,
    },
  }
}

const Home = ({countries}) => {
 

  return (
    <Layout>
    <FormularioDatos countries={countries}/>
    </Layout>

   
  )

}

Home.propTypes = {
  countries: PropTypes.object.isRequired
}

export default Home;
  

