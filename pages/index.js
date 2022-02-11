import Layout from '../Layout/Layout'
import FormularioDatos from '../components/FormDatos/FormularioDatos'
import { useState } from 'react'
import VistaProfile from '../components/VistaProfile/VistaProfile'







export async function getStaticProps() {
  const res = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
  const countries = await res.json()

  return {
    props:{
      countries,
    },
  }
}

export default function Home({countries}) {
 
const [data, setData] = useState([])
  
  return (
    <FormularioDatos countries={countries}/>

   
  )
}
