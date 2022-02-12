import  Head  from "next/head";
import Header from "../components/Header/Header";
import { Fragment } from "react";



const Layout = props => {
    
   
    
    return (
        <Fragment>
        <Head>
            <title>Mwc-Hackathon</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@300;400;700&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"/>
        </Head>
        <Header />
        
        
       <main>{props.children}</main>
        </Fragment>
      );
}
 
export default Layout;