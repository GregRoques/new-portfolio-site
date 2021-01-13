import React, {Component} from 'react';
import cssFooter from './footer.module.css';
import ContactModal from './ContactModal';
import { Contact, LinkedIn, GitHub, Resume } from './FooterLinks'

class Footer extends Component{
    state = {
        isContactOpen: false,
    }

    toggleEmail=(e)=>{
        const {isContactOpen} = this.state;
        if(e.target !== e.currentTarget && isContactOpen){
            return
        }
        this.setState(prevState=>({isContactOpen: !prevState.isContactOpen}))
    }
    
    render(){
        const { isContactOpen } = this.state;
        return(
            <div>
                <ContactModal
                    isShown={isContactOpen}
                    close= {this.toggleEmail}
                /> 
                <div className={cssFooter.footer}>
                    <Contact 
                        isEmailToggled={this.toggleEmail}
                        isShown={isContactOpen}
                    />
                    <LinkedIn/>
                    <GitHub/>
                    <Resume/>
                </div>
            </div>
        )
    }
}

export default Footer;