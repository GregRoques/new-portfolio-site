import React from 'react';
import {Link} from "react-router-dom";
import cssHamburgerModal from "./hamburgerModal.module.css";
import LocationOn from '@material-ui/icons/LocationOn';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';

const HamburgerModal = ({ close, isOpen, isFadeOut }) => {
    return isOpen?(
        <div className={cssHamburgerModal.modal} onClick={e=>close(e)}>
            <div className={ isFadeOut ? cssHamburgerModal.modalPositionFadeOut : cssHamburgerModal.modalPositionFadeIn } >
                    <div className={cssHamburgerModal.closeButton} onClick={e=>close(e)}>X</div> 
                    <div className={cssHamburgerModal.routeContainer}>
                        <Link onClick={e=>close(e)} to="/">Software</Link>
                        <hr style={{width: '80%', margin: '1rem 10%', border: '1px solid #4D95B4'}}/>
                        <Link onClick={e=>close(e)} to="/media">Media</Link>
                        <hr style={{width: '80%', margin: '1rem 10%', border: '1px solid #4D95B4'}}/>
                        <Link onClick={e=>close(e)} to="/photography">Photography</Link>
                        <hr style={{width: '80%', margin: '1rem 10%', border: '1px solid #4D95B4'}}/>
                        <a onClick={e=>close(e)} href="/resume" target="_blank">Resume</a>
                        <hr style={{width: '80%', margin: '1rem 10% 2rem 10%', border: '1px solid #4D95B4'}}/>
                    </div>
                    <div className={cssHamburgerModal.contactContainer}>
                        <div className={cssHamburgerModal.contactFormat}> <LocationOn className={cssHamburgerModal.glyphs} /> Atlanta, GA</div>
                        <div className={cssHamburgerModal.contactFormat}><a href="tel:504-220-3832"><Phone className={cssHamburgerModal.glyphs} />  504.220.3832</a></div>
                        <div className={cssHamburgerModal.contactFormat}><a href="mailto:greg@gregroques.com"> <Email className={cssHamburgerModal.glyphs} />  Greg@GregRoques.com</a></div>
                    </div>
            </div>
        </div>
    ) : null;
};

export default HamburgerModal;