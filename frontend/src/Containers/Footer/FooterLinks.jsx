import React from 'react';
import cssFooter from './footer.module.css';

export const Contact = ({ isEmailToggled, isShown }) => {
    return(
        <div className={`${cssFooter.contact} ${cssFooter.socialIcon}`} onClick={isEmailToggled}>
            <img className={cssFooter.contact1}  src= '/images/socialIcons/contact2.png' alt='greg@gregroques.com'/> 
            { !isShown ?  <img className={cssFooter.contact2} src= '/images/socialIcons/contact1.png' alt='greg@gregroques.com'/>: null}
        </div>
    )
}

export const LinkedIn = () => {
    return(
        <div className={`${cssFooter.li} ${cssFooter.socialIcon}`}>
            <a href='https://www.linkedin.com/in/gregroques/' rel='noopener noreferrer' target='_blank'>
                <img className={cssFooter.li1}  src= '/images/socialIcons/li2.png' alt='LinkedIn: @GregRoques'/>
                <img className={cssFooter.li2} src= '/images/socialIcons/li1.png' alt='LinkedIn: @GregRoques'/>
            </a>
        </div>
    )
};

export const GitHub = () => {
    return(
        <div className={`${cssFooter.gh} ${cssFooter.socialIcon}`}>
            <a rel='noopener noreferrer' target='_blank' href='https://github.com/GregRoques' >
                <img className={cssFooter.gh1}  src= '/images/socialIcons/gh2.png' alt='GitHub: @GregRoques'/>
                <img className={cssFooter.gh2} src= '/images/socialIcons/gh1.png' alt='GitHub: @GregRoques'/>
            </a>
        </div>
    )
};

export const Resume = () => {
    return(
            <div className={`${cssFooter.resume} ${cssFooter.socialIcon}`} onClick={e =>{ e.preventDefault(); window.open('https://www.gregroques.com/images/socialIcons/Resume.pdf')}}>
                <img className={cssFooter.resume1}  src= '/images/socialIcons/pdf2.png' alt='2019 Resume'/>
                <img className={cssFooter.resume2} src= '/images/socialIcons/pdf1.png' alt='2019 Resume'/>
            </div>
    )
};
