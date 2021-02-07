import React from 'react';
import LocationOn from '@material-ui/icons/LocationOn';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import cssFooterModal from './contactModal.module.css';

//NOTE: NO PHONE # IN PLACE RIGHT NOW. CHECK PHONE PHONE # LINE IF YOU USE THIS FOOTER.

const ResumeModal = ({ close, isShown }) => {
    return isShown ? (
        <div className={cssFooterModal.modal} onClick={e=>close(e)}>
            <div className={cssFooterModal.modalPosition}>
                <div className={cssFooterModal.closeButton} onClick={e=>close(e)}>X</div>
                <div className={cssFooterModal.modalContact}>
                    <span className={cssFooterModal.contactTitle}>Contact</span>
                    <div>
                        <div className={cssFooterModal.contactFormat}> <LocationOn className={cssFooterModal.glyphs} /> Atlanta, GA</div>
                        <div className={cssFooterModal.contactFormat}><a href="tel:‪404-913-2832‬"><Phone className={cssFooterModal.glyphs} />  ‪404.913.2832‬</a></div>
                        <div className={cssFooterModal.contactFormat}><a href="mailto:greg@gregroques.com"> <Email className={cssFooterModal.glyphs} />  Greg@GregRoques.com</a></div>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
};

export default ResumeModal;
