import { BtnSocial, ContainerSocial } from "../../../Styled";
import {
    TiSocialGithubCircular,
    TiSocialInstagram,
    TiSocialLinkedin,
    TiSocialTwitter,
  } from "react-icons/ti";

const SocialComponent = () => {
    return (
        <ContainerSocial>
          <BtnSocial>
            <TiSocialGithubCircular />
          </BtnSocial>
          <BtnSocial>
            <TiSocialInstagram />
          </BtnSocial>
          <BtnSocial>
            <TiSocialLinkedin />
          </BtnSocial>
          <BtnSocial>
            <TiSocialTwitter />
          </BtnSocial>
        </ContainerSocial>
      );
}
 
export default SocialComponent;