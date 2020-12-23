import React, { Component } from "react";
import { Link } from "react-router-dom";
import cssHeader from "./header.module.css";
import HamburgerModal from './hamburgerModal';


class Header extends Component {
    state = {
        isOpen: false,
        isFadeOut: false,
    };

    modalToggler = (e=false) => {
        const fadeOut = this.state.fadeOut;
        const openClose = this.state.isOpen;

        if(e && e.target !== e.currentTarget){
            return
        }

        if (!fadeOut && openClose) {
            this.setState({ isFadeOut: true });
            setTimeout(()=>{
                this.setState({
                    isOpen: false,
                    isFadeOut: false
                })
            },200);
           
        } else{
            this.setState({
                isOpen: true,
            });
        } 
    }
   
    render () {
        const { isOpen, isFadeOut} = this.state;
        const {modalToggler} = this;
        return (
            <div>
                <HamburgerModal
                    isOpen={isOpen }
                    close={modalToggler}
                    isFadeOut = {isFadeOut}
                />
                <div className={cssHeader.headerPosition}>
                    <div className={cssHeader.headerContainer}>
                        <Link to="/"><img alt="GregRoques.com" className={cssHeader.B4Llogo} src="/images/Greg Roques_LOGO.png"/></Link>
                            <div className={cssHeader.headerHamburgerContainer}>
                                <img alt="hamburger" className={cssHeader.headerHamburger} src="/images/hamburger.png" onClick={() => this.modalToggler()}/>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default Header;
