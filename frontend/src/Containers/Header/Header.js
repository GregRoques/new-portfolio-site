import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
// import Modal from "./Modal";

const isiPad = navigator.userAgent.match(/iPad/i) !== null;

class Header extends Component {
    state = {
        isOpen: false,
        isFadeOut: false,
    };

    modalToggler = (e) => {
        
        if(e && e.target !== e.currentTarget && isOpen){
            return
        }
        if (!isFadeOut && isOpen) {
            this.setState({ isFadeOut: true });
            setTimeout(() => {
                this.modalToggler();
            }, 1500);
           
        } else {
            this.setState(prevState=({
                isOpen: !prevState.isOpen,
                isFadeOut: false
            }));
           
        }
    }
   
    render () {
        return (
            <div>
                {/* <Modal
                    isOpen={ this.state.isOpen }
                    close={ this.modalToggler}
                    isFadeOut = {this.state.isFadeOut}
                /> */}
                <div className="headerPosition">
                    <div className="headerContainer">
                        <Link to="/"><img alt="GregRoques.com" className="B4Llogo" src="/Greg Roques_LOGO.png"/></Link>
                            <div className="headerHamburgerContainer">
                                <img alt="hamburger" className="headerHamburger" src="/hamburger.png" onClick={() => this.modalToggler()}/>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default Header;
