import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

export const Form = styled.form`
   
   
  
   min-height: 600px;
   margin: 0 auto;
   margin-top: 30px;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   color: whitesmoke;
   border: solid 1px #44494f;
   padding: 20px;
   border-radius:10px ;
   
`
export const Camp = styled.div`
 
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: space-evenly;
  

`
export const Label = styled.label`
   margin-bottom: 8px;
`

export const ButtonsContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 5px;
 padding: 10px;
`

export const InputForm = styled(TextField)`
  border: solid 1px #44494f;
  border-radius:5px;
  color: white;
  
  
`


export const Buttons = styled(Button)`
   
   padding: 5px;
   background: #34393f;
   width:100px;
   margin-top:10px ;
   
   &:hover{
       background:#22272e;
   }

`

export const ContainerTagsInput = styled.div`
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

export const Input = styled.input`
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
  justify-content: ;
  width:100%;
  flex-wrap:wrap;
  margin-bottom:20px ;
  
  
  

`

export const InputFlex = styled(TextField)`
  border: solid 1px #44494f;
  border-radius:5px;
  color: white;
  width: 200px;

  
`
export const DeleteButton = styled.div`
 
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
export const Error = styled.p`
 color:rgb(168, 38, 38);
`