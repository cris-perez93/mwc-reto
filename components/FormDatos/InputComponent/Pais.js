import { Camp,Label } from "../../FormSkills/Styled";
import { Select, Option } from "../Style";
import PropTypes from 'prop-types'


const Pais = ({country,setCountry,countries}) => {

    
    if(!countries) return <p>Loading...</p>

    

    return (
        <Camp>
        <Label>Country</Label>
        <Select
          select
          onChange={(e) => setCountry(e.target.value)}
          name="country"
          value={country}
        >
          {countries.data.map((option) =>  (
            <Option key={option.name} value={option.name}>
              {option.name}
            </Option>
          ))}
        </Select>
      </Camp>
      );
}

Pais.propTypes = {
  country: PropTypes.element.isRequired,
  countries: PropTypes.array.isRequired,
  setCountry: PropTypes.func.isRequired
}
 
export default Pais;
