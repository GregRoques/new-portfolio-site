import React from 'react';
import "./HeadFoot.css";
import LocationOn from '@material-ui/icons/LocationOn';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';

const ResumeModal = ({ close, isShown }) => {
    return isShown ?(
        <div className="modal">
            <div className="modalPosition">
                <div className="closeButton" onClick={close}>X</div>
                <div className="modalContact">
                    <span className="contactTitle">Contact</span>
                    <div className="contactFormat"> <LocationOn className="glyphs" /> Atlanta, GA</div>
                    <div className="contactFormat"><a href="tel:504-220-3832"><Phone className="glyphs" />  504.220.3832</a></div>
                    <div className="contactFormat"><a href="mailto:greg@gregroques.com"> <Email className="glyphs" />  Greg@GregRoques.com</a></div>
                </div>
            </div>
        </div>
    ) : "";
};

export default ResumeModal;
 