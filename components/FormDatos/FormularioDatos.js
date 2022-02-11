import { useState, useContext, Fragment } from "react";
import { Camp, Label, Form } from "../FormSkills/Styled";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Layout from '../../Layout/Layout';
import { Buttons } from "../FormSkills/FormularioSkills";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import DataContext from './../../Context/DataContext'
import { Modal } from "react-responsive-modal";
import Router from "next/router";
import { CampFlex, InputFlex, InputForm } from "../FormSkills/FormularioSkills";


const Flag = styled.input`
  
  display: none;
`


export const Select = styled.select`
  background: transparent;
  color: whitesmoke;
  height: 42px;
  border-radius:5px ;
  width: 200px;
  font-size:16px;

`
export const Option = styled.option`
  background: #2e2e2ef3;
 
  
`



function FormularioDatos ({countries}) {
    
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  

    const [error, setError] = useState(false)

    const router = useRouter()

    const {setAllData} = useContext(DataContext)
    

    

  

    
    const handleSubmit = e => {
      e.preventDefault()
      if([email, name, description,country,city].includes('')){
        setError(true)
        return;
      }

      setError(false)
     

      const objetoData = {
        email,
        name,
        description,
        country,
        city,
        
      }
      setAllData(objetoData)

      router.push('/user/edit-skills')
    }

    
    



    return (
      <Layout>
        <Modal
          styles={{ modal: {  maxWidth: "1200px", width: "", backgroundColor:'#2e2e2e98' } }}
          center
          open
          onClose={() => Router.push("/")}
        >
      <Form onSubmit={handleSubmit}>
        <h1>Editar Perfil</h1>
        <Camp>
          <Label>Name</Label>
          <InputForm
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            id="outlined-basic"
            variant="outlined"
            name="name"
            value={name}
            size='small'
            inputProps={{ style: { color: "whitesmoke" } }}
          />
        </Camp>
        <Camp>
          <Label>Email</Label>
          <InputForm
            id="outlined-basic"
            variant="outlined"
            name="email"
            value={email}
            size='small'
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{ style: { color: "whitesmoke" } }}
          />
          
        </Camp>
        <Camp>
          <Label>Description</Label>
          <InputForm
            id="standard-multiline-static"
            multiline
            rows={4}
            variant="standard"
            name='description'
            size='small'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            inputProps={{ style: { color: "whitesmoke" } }}
          />
        </Camp>
        
        <CampFlex>
        <Camp>
        <Label>Pais de residencia</Label>
        <Select
              
              select
              onChange={(e) => setCountry(e.target.value)}
              name="country"
              value={country}
              
              
              
          > 
          {countries.data.map(option=> (
            
            <Option  key={option.name} value={option.name}>{option.name}</Option>
            
            
            
          ))}
             

            </Select>
            </Camp>
            
        
            <Camp>
          <Label>City</Label>
          <InputFlex
            id="outlined-basic"
            variant="outlined"
            name="city"
            value={city}
            size='small'
            onChange={(e) => setCity(e.target.value)}
            inputProps={{ style: { color: "whitesmoke" } }}
          />
           </Camp>
        </CampFlex>
        

        {error && <Camp> <p>Rellena todos los campos</p></Camp>}

        
          
          <Buttons  type='submit' variant="contained">Guardar</Buttons>
         
        
      </Form>
      </Modal>
    </Layout>
      );
}


 
export default FormularioDatos;