import { Camp, Label } from "../Styled";
import { Select, Option } from "../../FormDatos/Style";
import PropTypes from 'prop-types'

const Sector = ({ sector, setSector }) => {
  return (
    <Camp>
      <Label>Sector</Label>
      <Select
        id="outlined-select-currency"
        select
        onChange={(e) => setSector(e.target.value)}
        name="sector"
        value={sector}
      >
        <Option value="Frontend">Frontend</Option>
        <Option value="Backend">Backend</Option>
        <Option value="Mobile">Mobile</Option>
        <Option value="Data Science">Data Science</Option>
      </Select>
    </Camp>
  );
};

Sector.propTypes = {
  sector: PropTypes.element.isRequired,
  setSector: PropTypes.func.isRequired
}
 

export default Sector;
