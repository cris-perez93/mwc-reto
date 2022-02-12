import styled from "@emotion/styled";

export const ContainerSkills = styled.div`
  
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
export const List = styled.ul`
  display: flex;
  flex-wrap:wrap ;
  justify-content:center;
  align-items:center;
  gap:10px;
  padding: 10px;
  
`

export const Edit = styled.div`
  
  color: #B3B8CD;
  font-size:16px;
  padding: 5px;
  position: absolute;
  top:15px;
  right:20px;
  z-index:2;
  cursor: pointer;
  
`