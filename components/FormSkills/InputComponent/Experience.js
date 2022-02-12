import { Camp, Label, InputFlex } from "../Styled";
import PropTypes from 'prop-types'

const Experience = ({experience, setExperience}) => {
    return ( 
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
     );
}
Experience.propTypes = {
  experience: PropTypes.element.isRequired,
  setExperience: PropTypes.func.isRequired
}
 
export default Experience;