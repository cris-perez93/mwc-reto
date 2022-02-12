import { Fragment } from "react";
import { Camp,Label,InputForm } from "../../FormSkills/Styled";
import PropTypes from 'prop-types'




const Name = ({name,setName}) => {


  return (
        <Fragment>
            <Camp>
          <Label>Name</Label>
          <InputForm
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            id="outlined-basic"
            variant="outlined"
            name="name"
            value={name}
            size="small"
            inputProps={{ style: { color: "whitesmoke" } }}
          />
        </Camp>
        </Fragment>
      );
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired
}
 
export default Name;