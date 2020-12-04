import React, { Component } from "react";
import { Link } from "react-router-dom";
import cssHeader from "./header.module.css";
// import Modal from "./Modal";

const isiPad = navigator.userAgent.match(/iPad/i) !== null;

class Header extends Component {
    state = {
        isResized: true,
        isOpen: false,
        isFadeOut: false,
    };

    componentDidMount () {
        window.addEventListener("resize", this.logoResize);
        window.innerWidth < 620 || (window.innerWidth > 767 && window.innerWidth < 1025 && (window.innerHeight > window.innerWidth) && isiPad)
            ? this.setState({ isResized: false })
            : this.setState({ isResized: true });
    };


    modalToggler = (props) => {
        if (!props) {
            const inverse = this.state.isOpen;
            this.setState({
                isOpen: !inverse,
                isFadeOut: false
            });
        } else {
            this.setState({ isFadeOut: true });
            setTimeout(() => {
                this.modalToggler();
            }, 1500);
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
                <div className={ cssHeader.headerPosition}>
                    <div className={ cssHeader.headerContainer }>
                        <Link to="/"><img alt="GregRoques.com" className={ cssHeader.B4Llogo } src="/Greg Roques_LOGO.png"/></Link>
                            <div className= { cssHeader.headerContainerSmallText}>
                                <img alt="hamburger" className={cssHeader.imageContain} src="/hamburger.png" onClick={() => this.modalToggler()}/>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default Header;
