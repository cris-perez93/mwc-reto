import { Camp, Label,InputFlex } from "../../FormSkills/Styled";
import PropTypes from 'prop-types'


const City = ({city,setCity}) => {



    return (
        <Camp>
            <Label>City</Label>
            <InputFlex
              id="outlined-basic"
              variant="outlined"
              name="city"
              value={city}
              size="small"
              onChange={(e) => setCity(e.target.value)}
              inputProps={{ style: { color: "whitesmoke" } }}
            />
          </Camp>
      );
}

City.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired
}
 
export default City;