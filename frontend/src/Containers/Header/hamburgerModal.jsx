import React from 'react';
import {Link} from "react-router-dom";
import cssHamburgerModal from "./hamburgerModal.module.css";
import Email from '@material-ui/icons/Email';
import LocationOn from '@material-ui/icons/LocationOn';

const HamburgerModal = ({ close, isOpen, isFadeOut }) => {
    return isOpen?(
        <div className={cssHamburgerModal.modal} onClick={e=>close(e)}>
            <div className={ isFadeOut ? cssHamburgerModal.modalPositionFadeOut : cssHamburgerModal.modalPositionFadeIn } >
                    <div className={cssHamburgerModal.closeButton} onClick={e=>close(e)}>X</div> 
                    <div className={cssHamburgerModal.routeContainer}>
                        <Link onClick={e=>close(e)} to="/">Web Dev</Link>
                        <hr style={{width: '80%', margin: '1rem 10%', border: '1px solid #4D95B4'}}/>
                        <Link onClick={e=>close(e)} to="/media">Media</Link>
                        <hr style={{width: '80%', margin: '1rem 10%', border: '1px solid #4D95B4'}}/>
                        <Link onClick={e=>close(e)} to="/photography">Photography</Link>
                        <hr style={{width: '80%', margin: '1rem 10%', border: '1px solid #4D95B4'}}/>
                        <div className={cssHamburgerModal.headerModalResume} onClick={e =>{ close(e); window.open('https://www.gregroques.com/images/socialIcons/Resume.pdf')}}>Resume</div>
                        <hr style={{width: '80%', margin: '1rem 10% 2rem 10%', border: '1px solid #4D95B4'}}/>
                    </div>
                    <div className={cssHamburgerModal.contactContainer}>
                    <div className={cssHamburgerModal.contactFormat}> <LocationOn className={cssHamburgerModal.glyphs} /> Atlanta, GA</div>
                        <div className={cssHamburgerModal.contactFormat}><a href="mailto:greg@gregroques.com"> <Email className={cssHamburgerModal.glyphs} />  Greg@GregRoques.com</a></div>
                    </div>
            </div>
        </div>
    ) : null;
};

export default HamburgerModal;