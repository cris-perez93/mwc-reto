import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Layout from '../../Layout/Layout';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ButtonSkills from '../ButtonSkills/ButtonSkills';
import { Form, Camp, Label } from './Styled';
import { useState, useContext } from 'react';
import { TiDelete } from "react-icons/ti";
import { useRouter } from 'next/router';
import ExperienceContext from './../../Context/ExperienceContext'
import { Modal } from "react-responsive-modal";
import Router from "next/router";
import { Select,Option } from '../FormDatos/FormularioDatos';




export const InputForm = styled(TextField)`
  border: solid 1px #44494f;
  border-radius:5px;
  color: white;
  
  
`


export const Buttons = styled(Button)`
   
   padding: 5px;
   background: #34393f;
   width:100px;
   
   &:hover{
       background:#22272e;
   }

`

const ContainerTagsInput = styled.div`
    display: flex;
	align-items: center;
	flex-wrap: wrap;
	min-height: 48px;
	width: 100%;
	padding: 0 8px;
	border: 1px solid #44494f;
	border-radius: 6px;
    min-height:100px;
    
    
    
	
`

const Input = styled.input`
  flex: 1;
  border: none;
  height: 46px;
  font-size: 14px;
  padding: 4px 0 0 0;
  margin-left:10px;
  background: transparent;
  &:focus {
    outline: transparent;
  }
`;

export const CampFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  

`

export const InputFlex = styled(TextField)`
  width: 200px;
  border: solid 1px #44494f;
  border-radius:5px;
  color: white;
`
const DeleteButton = styled.div`
 
  font-size:20px;
  margin-left:5px ;
  display :flex ;
  align-items:center;
  justify-content:center;
  margin-bottom: 3px;
  &:hover{
      background: rgb(77, 41, 41);
      border-radius:100% ;
  }

`
const Error = styled.p`
 color:rgb(168, 38, 38);
`


const FormularioSkills = () => {

    

  const [empresa, setEmpresa] = useState('Empresa Actual')
  const [sector, setSector] = useState('Frontend')
  const [experience, setExperience] = useState('2')
  const [skills, setSkills] = useState(['Reactjs', 'Nodejs'])

  const [error, setError] = useState(false)

  const {setAllExperience} = useContext(ExperienceContext)

  const router = useRouter()

  
  const addSkills = e => {
      if(e.key ===  'Enter') {
          setSkills([...skills, e.target.value]);
          e.target.value = ''
      }
  }
  
  const removeSkills = indexToRemove => {
      setSkills(skills.filter((_, index) => index !== indexToRemove))
  }

  const handleSubmit = e => {

    
  if([empresa, sector, experience, skills].includes('')){
        setError(true)
        return;
    }

    setError(false)
    
    const objectExperience = {
        empresa,
        sector,
        experience,
        skills
    }

    setAllExperience(objectExperience)
    router.push('/user/profile')
}





if(!skills) return <p>Loading...</p>


    return (
      
          <Modal
          styles={{ modal: {  maxWidth: "1200px", width: "", backgroundColor:'#2e2e2e98' } }}
          center
          open
          onClose={() => Router.push("/")}
          
        >
        <Form>
        
          <h1>Experiencia</h1>
        
          <Camp>
            <Label>Empresa</Label>
            <InputForm
              onChange={(e) => setEmpresa(e.target.value)}
              placeholder="Freelance"
              id="outlined-basic"
              variant="outlined"
              name="empresa"
              value={empresa}
              size='small'
              inputProps={{ style: { color: "whitesmoke" } }}
              
            />
          </Camp>
          <CampFlex>
            <Camp>
            <Label>Sector</Label>
            <Select
              id="outlined-select-currency"
              select
              onChange={(e) => setSector(e.target.value)}
              name="sector"
              value={sector}
             
              
            >
              <Option  value='Frontend'>Frontend</Option>
              <Option value='Backend'>Backend</Option>
              <Option value='Mobile'>Mobile</Option>
              <Option value='Data Science'>Data Science</Option>
             
            </Select>
            </Camp>
            
          
            <Camp>
            <Label>Años de experiencia</Label>
            <InputFlex
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              id="outlined-basic"
              variant="outlined"
              size='small'
              type='number'
              inputProps={{ style: { color: "whitesmoke" } }}
            />
            </Camp>
          </CampFlex>
          <Camp>
              
            <Label>Skills</Label>
            <ContainerTagsInput>
              <ul>
              {skills.map((skill, index) => (
                  <ButtonSkills key={index}>
                    <span>{skill}</span>
                    <DeleteButton>
                    <TiDelete onClick={() => removeSkills(index)} />
                    </DeleteButton>
                  </ButtonSkills>
                ))}
              </ul>
              <Input
                type="text"
                placeholder="Press enter to add skills"
                onKeyUp={addSkills}
              />
            </ContainerTagsInput>
            
          </Camp>

          {error &&<Camp> <Error>Rellena todos los campos</Error></Camp>}

          
            <Buttons type='button' onClick={handleSubmit} variant="contained">Guardar</Buttons>
          
        </Form>
        </Modal>
      
    );
}
 
export default FormularioSkills;