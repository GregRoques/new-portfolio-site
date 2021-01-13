import React from 'react';
import cssFooter from './footer.module.css';
import { Contact, LinkedIn, GitHub, Resume } from './FooterLinks'

const Footer = ()=>{    
        return(
            <div>
                <div className={cssFooter.footer}>
                    <Contact/>
                    <LinkedIn/>
                    <GitHub/>
                    <Resume/>
                </div>
            </div>
        )
}

export default Footer;