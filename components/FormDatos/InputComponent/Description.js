import { Fragment } from "react";
import { Camp, Label,InputForm } from "../../FormSkills/Styled";
import PropTypes from 'prop-types'



const Description = ({description,setDescription}) => {
    return ( 
        <Fragment>
              <Camp>
          <Label>Description</Label>
          <InputForm
            id="standard-multiline-static"
            multiline
            rows={4}
            variant="standard"
            name="description"
            size="small"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            inputProps={{ style: { color: "whitesmoke" } }}
          />
        </Camp>
        </Fragment>
     );
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired
}
 
export default Description;