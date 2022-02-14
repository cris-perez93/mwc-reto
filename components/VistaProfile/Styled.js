import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Sector = styled(Button)`
  background: #2164a8;
  color: whitesmoke;
  position: absolute;
  font-size: 12px;
  left: 10px;
  bottom: -20px;
  min-width: 120px;

  @media (max-width: 425px) {
    min-width: 30px;
    
  }

  cursor: auto;
  &:hover {
    background: #2164a8;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  border: solid 1px #44494f;
  width: 800px;
  max-width: 90%;
  flex-wrap: wrap;
`;
export const Avatar = styled.img`
  border-radius: 100%;
  padding: 10px;
  background: #22272e;
  width: 150px;
  border: solid 1px #44494f;
  margin-bottom: 10px;
`;
export const ContainerExperience = styled.div`
  width: 800px;
  max-width: 90%;
  margin-top: 50px;
`;
export const AvatarEdit = styled.img`
  position: absolute;
  right: 50px;
  top: 20px;
  border-radius: 100%;
`;

export const ContainerDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  @media (max-width: 400px) {
    max-width: 250px;
  }
`;
export const ContainerHi = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  
`;

export const Description = styled.p`
  margin-top: 20px;
  padding: 20px;
  border-top: solid 1px #44494f;
  overflow-wrap: break-word;
  width: 80%;
  @media (max-width: 400px) {
    
    max-width:100%;
    width: 100%;
    
    
  }
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 300px;

  padding: 10px;
`;

export const ContainerLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  flex-wrap: wrap;
`;
export const Span = styled.span`
  font-weight: bold;
`;

export const Experience = styled.div`
  background: ;
  font-size: 14px;
  border-radius: 5px;
  padding: 3px;
  position: absolute;
  bottom: 0;
  z-index: 3;
  right: 0;
`;
export const ContainerSocial = styled.div`
  width: 150px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  bottom: -20px;
  right: 50px;
  gap: 5px;
  @media (max-width: 630px) {
    flex-direction: column;
    right: 0;
    width: 10px;
  }
`;
export const BtnSocial = styled.div`
  background: black;
  padding: 5px;
  display: flex;
  border-radius: 100%;
  cursor: pointer;
  &:hover {
    background: #22272eç;
    transform: translateY(1.5px);
  }
`;
export const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  color: #adbac7;
  padding: 20px;
`;

export const Hi = styled.h1`
  padding-left: 30px;
`;

export const Empresa = styled(Button)`
  background: #2164a8;
  color: whitesmoke;
  position: absolute;
  font-size: 12px;
  left: 150px;
  bottom: -20px;
  min-width: 120px;

  @media (max-width: 425px) {
    left:150px;
    bottom:-70px;
    z-index:3;
    
  }

  cursor: auto;
  &:hover {
    background: #2164a8;
  }
`;
