import React from 'react';
import "./Layout.css";
//import Header from "../HeadFoot/Header";
import Footer from "../HeadFoot/Footer";
import Aux from "./Aux";

function Layout(props){
    return(
        <div className="layoutBody">
        <Aux>
            {/* <Header header={props.header}/> */}
                <div className="contentMargin fadeIn">
                    {props.children}
                </div>
            <Footer />
        </Aux>
        </div>
    )
}

export default Layout;