import React from 'react';
import {Link} from "react-router-dom";
import cssHamburgerModal from "./hamburgerModal.module.css";

const HamburgerModal = ({ close, isOpen, isFadeOut }) => {
    return isOpen?(
        <div className={cssHamburgerModal.modal} onClick={e=>close(e)}>
            <div className={ isFadeOut ? cssHamburgerModal.modalPositionFadeOut : cssHamburgerModal.modalPositionFadeIn } >
                    <div className={cssHamburgerModal.closeButton} onClick={e=>close(e)}>X</div> 
                    <div className={cssHamburgerModal.routeContainer}>
                        <Link onClick={e=>close(e)} to="/">Writing</Link>
                        <hr style={{width: '80%', margin: '1.75rem 10%', border: '1px solid #4D95B4'}}/>
                        <Link onClick={e=>close(e)} to="/design">Design</Link>
                        <hr style={{width: '80%', margin: '1.75rem 10%', border: '1px solid #4D95B4'}}/>
                        <Link onClick={e=>close(e)} to="/photography">Photography</Link>
                        <hr style={{width: '80%', margin: '1.75rem 10%', border: '1px solid #4D95B4'}}/>
                        <div className={cssHamburgerModal.headerModalResume} onClick={e =>{ close(e); window.open('https://www.gregroques.com/Resume.pdf')}}>Resume</div>
                        <hr style={{width: '80%', margin: '1.75rem 10%', border: '1px solid #4D95B4'}}/>
                    </div>
            </div>
        </div>
    ) : null;
};

export default HamburgerModal;