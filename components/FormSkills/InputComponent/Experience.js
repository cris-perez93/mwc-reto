import { Camp, Label, InputFlex } from "../Styled";
import PropTypes from 'prop-types'

const Experience = ({experience, setExperience}) => {
    return ( 
        <Camp>
            <Label>Years Experience</Label>
            <InputFlex
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              id="outlined-basic"
              variant="outlined"
              size='small'
              type='number'
              pattern="\d*"
              inputProps={{ style: { color: "whitesmoke" } }}
            />
            </Camp>
     );
}
Experience.propTypes = {
  experience: PropTypes.string.isRequired,
  setExperience: PropTypes.func.isRequired
}
 
export default Experience;