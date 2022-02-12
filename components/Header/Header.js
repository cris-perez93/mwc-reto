import Logo from "./../../public/mwc-logo.png";
import Image from "next/image";
import { HeaderContainer } from "./Style";

const Header = (props) => {
  return (
    <HeaderContainer>
      <Image position="absolute" width="200" height="80" src={Logo} alt="MWC" />
    </HeaderContainer>
  );
};

export default Header;
