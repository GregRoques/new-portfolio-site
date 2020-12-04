import React, {Component} from "react";
import "./footer.css";
import ContactModal from './ContactModal';
import { Contact, LinkedIn, GitHub, Resume } from './FooterLinks'


class Footer extends Component{

    state ={
        isContactOpen: false,
        isPhoto: false
    }

    componentDidMount(){
        const isPhoto = window.location.pathname.includes("/photography") ? true : false;
        this.setState({
            isPhoto: isPhoto
        })
    }

    toggleEmail=(e)=>{
        const {isContactOpen} = this.state;
        if(e.target !== e.currentTarget && isContactOpen){
            return
        }
        this.setState(prevState=>({isContactOpen: !prevState.isContactOpen}))
    }
    
    render(){
        const { isContactOpen, isPhoto } = this.state;
        return(
            <div>
                <ContactModal
                    isShown={isContactOpen}
                    close= {this.toggleEmail}
                /> 
                <div className="footer">
                    {!isPhoto ?
                        <>
                            <Contact 
                                isEmailToggled={this.toggleEmail}
                                isShown={isContactOpen}
                            />
                            <LinkedIn/>
                            <GitHub/>
                            <Resume/>
                        </> :
                        <>
                            <Contact 
                                isEmailToggled={this.toggleEmail}
                                isShown={isContactOpen}
                            />
                            <LinkedIn/>
                        </> 
                    }
                </div>
            </div>
        )
    }
}

export default Footer;