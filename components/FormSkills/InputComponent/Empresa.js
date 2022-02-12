import { Camp,Label,InputForm } from "../Styled";
import PropTypes from 'prop-types'


const Empresa = ({empresa, setEmpresa}) => {
    return ( 
        <Camp>
            <Label>Empresa</Label>
            <InputForm
              onChange={(e) => setEmpresa(e.target.value)}
              placeholder="Freelance"
              id="outlined-basic"
              variant="outlined"
              name="empresa"
              value={empresa}
              size='small'
              inputProps={{ style: { color: "whitesmoke" } }}
              
            />
          </Camp>
     );

     
}

Empresa.propTypes = {
  empresa: PropTypes.element.isRequired,
  setEmpresa: PropTypes.func.isRequired
}
 
export default Empresa;