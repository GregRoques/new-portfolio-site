import React from 'react';
import cssFooterModal from "./contactModal.module.css";
import LocationOn from '@material-ui/icons/LocationOn';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';

const ResumeModal = ({ close, isShown }) => {
    return isShown ?(
        <div className={cssFooterModal.modal} onClick={e=>close(e)}>
            <div className={cssFooterModal.modalPosition}>
                <div className={cssFooterModal.closeButton} onClick={e=>close(e)}>X</div>
                <div className={cssFooterModal.modalContact}>
                    <span className={cssFooterModal.contactTitle}>Contact</span>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default ResumeModal;
 