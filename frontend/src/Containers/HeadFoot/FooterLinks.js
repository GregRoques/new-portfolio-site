import React from "react";
import { Link } from 'react-router-dom';
import "./footer.css";

export const Contact = ({ isEmailToggled, isShown  }) => {
    return(
        <div className="contact socialIcon" onClick={isEmailToggled}>
            <img className="contact1"  src= '/images/socialIcons/contact2.png' alt='greg@gregroques.com'/> 
            { !isShown ?  <img className="contact2" src= '/images/socialIcons/contact1.png' alt='greg@gregroques.com'/>: null}
        </div>
    )
}

export const LinkedIn = () => {
    return(
        <div className="li socialIcon">
            <a href='https://www.linkedin.com/in/gregroques/' rel="noopener noreferrer" target="_blank">
                <img className="li1"  src= '/images/socialIcons/li2.png' alt='LinkedIn: @GregRoques'/>
                <img className="li2" src= '/images/socialIcons/li1.png' alt='LinkedIn: @GregRoques'/>
            </a>
        </div>
    )
};

export const GitHub = () => {
    return(
        <div className="gh socialIcon">
            <a rel="noopener noreferrer" target="_blank" href='https://github.com/GregRoques' >
                <img className="gh1"  src= '/images/socialIcons/gh2.png' alt='GitHub: @GregRoques'/>
                <img className="gh2" src= '/images/socialIcons/gh1.png' alt='GitHub: @GregRoques'/>
            </a>
        </div>
    )
};

export const Resume = () => {
    return(
        <div className="resume socialIcon">
            <Link onClick={e =>{ e.preventDefault(); window.open("https://www.gregroques.com/images/socialIcons/Resume.pdf")}}>
                <img className="resume1"  src= '/images/socialIcons/pdf2.png' alt='2019 Resume'/>
                <img className="resume2" src= '/images/socialIcons/pdf1.png' alt='2019 Resume'/>
            </Link>
        </div>
    )
};
