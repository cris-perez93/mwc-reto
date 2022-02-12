import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import PropTypes from 'prop-types'


const ButtonSkill = styled(Button)`
  border-radius: 5px;
  padding: 5px;
  min-width: 100px;
  margin-left: 5px;
  margin-top: 5px;
  font-size: 12px;
  background: #34393f;
  color: #adbac7;

  @media (max-width: 390px) {
    min-width:30px;
    font-size:10px;
  }

  

  &:hover {
    background: #22272e;
  }
`;
const ButtonSkills = ({ children }) => {
  return <ButtonSkill variant="contained">{children}</ButtonSkill>;
};

ButtonSkill.propTypes = {
  children:PropTypes.node.isRequired,
}

export default ButtonSkills;
