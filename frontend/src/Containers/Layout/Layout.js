import React from 'react';
import cssHocLayout from "./layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Aux from "./Aux";

function Layout(props){
    return(
        <div className={cssHocLayout.layoutBody}>
        <Aux>
            <Header/>
                <div className={`${cssHocLayout.contentMargin}`}>
                    {props.children}
                </div>
            <Footer />
        </Aux>
        </div>
    )
}

export default Layout;