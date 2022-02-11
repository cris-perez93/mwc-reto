import styled from "@emotion/styled";
import Link from "next/link";
import Logo from './../../public/mwc-logo.png'
import Image from "next/image";

const HeaderContainer = styled.header`
  background: #2d333b;
  color: whitesmoke;
  display: flex;
  justify-content:space-between;
  padding: 20px;
  height: 100px;
`

const List = styled.ul`
 display: flex;
 justify-content:flex-end;
 width: 400px;
 justify-content:space-evenly;
 align-items:center;
`
const LogoContent=styled.div`
  position: absolute;
`




const Header = (props) => {
   
    return (
            <HeaderContainer>
                <LogoContent>
                <Image position='absolute' width='280' height='80' src={Logo} alt='MWC'/>
                </LogoContent>
                
                
                
            </HeaderContainer>
        
      );
}
 
export default Header;