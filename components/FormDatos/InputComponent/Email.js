import { Fragment } from "react";
import { Camp, Label,InputForm, Error } from "../../FormSkills/Styled";
import PropTypes from 'prop-types'



const Email = ({email,setEmail}) => {
    return (
        <Fragment>
             <Camp>
          <Label>Email</Label>
          <InputForm
            id="outlined-basic"
            variant="outlined"
            name="email"
            type='email'
            value={email}
            size="small"
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{ style: { color: "whitesmoke" } }}
          />
          
        </Camp>
        </Fragment>
      );
}

Email.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired
}
 
export default Email;
