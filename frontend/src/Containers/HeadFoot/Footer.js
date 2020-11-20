import React, {Component} from "react";
import "./HeadFoot.css";
import ResumeModal from './ResumeModal';
import { Footer, LinkedIn, GitHub, Resume } from './FooterLinks'


class Footer extends Component{

    state ={
        email: false,
        isPhoto: false
    }

    componentDidMount(){
        const isPhoto = window.location.pathname.includes("/photography") ? true : false;
        this.setState({
            isPhoto: isPhoto
        })
    }

    toggleEmail=()=>{
        const doesShow = this.state.email
        this.setState({email: !doesShow})
    }
    
    render(){
        const { email, isPhoto } = this.state;
        return(
            <div>
                <ResumeModal
                    isShown={email}
                    close= {this.toggleEmail}
                /> 
                <div className="footer">
                    {!isPhoto ?
                        <>
                            <Contact 
                                isEmailToggled={this.toggleEmail}
                                isShown={email}
                            />
                            <LinkedIn/>
                            <GitHub/>
                            <Resume/>
                        </> :
                        <>
                            <Contact 
                                isEmailToggled={this.toggleEmail}
                                isShown={email}
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