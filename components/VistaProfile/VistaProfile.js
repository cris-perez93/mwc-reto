import Layout from "../../Layout/Layout";
import DataContext from "../../Context/DataContext";
import  ExperienceContext  from "../../Context/ExperienceContext";
import { useContext } from "react";
import styled from "@emotion/styled";
import ButtonSkills from "../ButtonSkills/ButtonSkills";
import Button from '@mui/material/Button';
import { FiEdit2 } from "react-icons/fi";
import {  GoLocation } from "react-icons/go";
import Link from "next/link";


import { 
    TiSocialGithubCircular,
    TiSocialInstagram,
    TiSocialLinkedin,
    TiSocialTwitter, 
} from "react-icons/ti";


const Sector = styled(Button)`
 background:#2164a8 ;
 color: whitesmoke;
 position: absolute;
 top: 0;
 font-size:12px;
 right: 10px;
 top:10px;
 width: 120px;
 padding: 5px;
 cursor:auto ;
 &:hover{
     background: #2164a8;
 }
`

const CardContainer = styled.div`
  width: 800px;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 10px;
  border-radius:10px;
  position: relative;
  border: solid 1px #44494f;

`
const Avatar = styled.img`
 border-radius:100%;
 padding: 10px;
 background: #22272e;
 width: 150px;
 border:solid 1px #44494f;
 margin-bottom:10px;
 
 

`
const AvatarEdit = styled.img`
 position: absolute;
 right: 50px;
 top: 20px;
 border-radius:100%;
`

const ContainerSkills = styled.div`
  
  display: flex;
  flex-direction:column ;
  justify-content:space-evenly;
  width: 100%;
  min-height:150px;
  padding: 20px;
  border: solid 1px #44494f;
  border-radius:10px;
  margin-bottom:30px;
  position: relative;

`
const List = styled.ul`
  display: flex;
  flex-wrap:wrap ;
  justify-content:center;
  align-items:center;
  gap:10px;
  padding: 10px;
  
`



const Edit = styled.div`
  
  color: #B3B8CD;
  font-size:16px;
  padding: 5px;
  position: absolute;
  top:15px;
  right:20px;
  z-index:2;
  cursor: pointer;
  
`
const Description = styled.p`
  

  margin-top:20px;
  padding: 20px;
  border-top: solid 1px #44494f;
  width:100%;
  
  
  
  `

const ContainerData = styled.div`
   display: flex;
   flex-direction:column;
   justify-content:space-evenly;
   align-items: center;
   position: relative;
   width: 70%;
   padding: 10px;
   
   
   
`

const ContainerLocation = styled.div`
   display: flex;
   align-items:center;
   justify-content:space-evenly;
   padding: 5px;
   margin-top:20px;
   margin-bottom:20px ;
   width: 260px;
   text-align:center;
`
const Span = styled.span`
  font-weight:bold;
`

const Experience = styled.div`
  background: ;
  font-size:14px;
  border-radius:5px;
  padding: 3px;
  position: absolute;
  bottom:0;
  z-index:3;
  right: 0;
  
   

`
const ContainerSocial=styled.div`
  
  width: 150px;
  font-size:30px;
  display: flex;
  align-items:center;
  justify-content:space-evenly;
  position: absolute;
  bottom:-20px;
  right:50px;
  gap: 5px;
  

`
const BtnSocial=styled.div`
  background: black;
  padding:5px;
  display: flex;
  border-radius:100%;
  cursor:pointer;
  &:hover {
    background: #22272eç;
    transform:translateY(1.5px)
  }

`
const ContainerGeneral=styled.div`
display: flex;
flex-direction:column;
align-items:center;
width:60%;
margin: 0 auto;
margin-top:30px;
color: #adbac7;
padding: 20px;


  
`

const ContainerDescription = styled.div`
  width: 800px;
  margin-top:50px;
`

const Hi = styled.h1`
  padding-left:30px;
`
const ContainerHi=styled.div`
 
 display: flex;
 flex-direction:column;
 align-items:center;
 
`

const VistaProfile = ({results}) => {

    console.log(results[0].picture.medium)

    
const {alldata} = useContext(DataContext)
const {allexperience} = useContext(ExperienceContext)


const{name, description, country, city, email} = alldata
const {empresa,sector,experience,skills} = allexperience


console.log(allexperience)
console.log(alldata)

if(!skills) return <p>Loading... no cargan los skills</p>


    
    return (
        
            <ContainerGeneral>
                <AvatarEdit src={results[0].picture.medium}/>
            <CardContainer>

            
            
               
                    
               <ContainerSocial>
                  <BtnSocial><TiSocialGithubCircular/></BtnSocial>
                  <BtnSocial><TiSocialInstagram/></BtnSocial>
                  <BtnSocial><TiSocialLinkedin/></BtnSocial>
                  <BtnSocial><TiSocialTwitter/></BtnSocial>
                </ContainerSocial>
                 
                 
                
                
               
                <Link href='/'><Edit><FiEdit2/></Edit></Link>
               
                <ContainerData>
                <Avatar src={results[0].picture.large}/>
                
                <h3>{name}</h3>
                <p>{email}</p>
                <ContainerLocation>
                 < GoLocation/>
                <p>{country} /</p>
                <p>{city}</p>
                </ContainerLocation>
                </ContainerData>

                <ContainerHi>
                <Hi>Hi there! ✌</Hi>
                <Description>{description}</Description>
                </ContainerHi>
                
                
                

            </CardContainer>
            <ContainerDescription>
            
                

                <ContainerSkills>
                    <h3>SKILLS</h3>
                    
                
                     <Sector>{sector}</Sector>
                    
                <List>
                 {skills.map(tag=>(
                     <ButtonSkills key={tag}>{tag}</ButtonSkills>
                 ))}
                </List>

            </ContainerSkills>
            
            </ContainerDescription>
            </ContainerGeneral>
            

            
        
      );
}
 
export default VistaProfile;