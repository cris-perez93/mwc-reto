import { Fragment } from "react";
import { Camp,Label,InputForm, Error } from "../../FormSkills/Styled";
import PropTypes from 'prop-types'




const Name = ({name,setName, error}) => {




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
          {error && <Error>Name is required</Error>}
        </Camp>
        </Fragment>
      );
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired
}
 
export default Name;