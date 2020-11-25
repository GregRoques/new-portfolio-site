import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { mySkills, imageLink } from './About_Technologies'
import Legend from "../../Legend/Legend";
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'

class About extends Component{
    state={
        isLoaded: false
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return isLoaded ? (
        <div className="fadeIn">
            <div className="bioGrid">
                <div className="portraitPadding">
                    <img className="portrait" alt="myPic" src="/images/homepage/myPic.jpg"/>
                </div>
                <div className='whoAmIPadding'>
                    <div className="aboutMeHeader">About Me</div>
                    <div className="aboutMeText">
                        <div>I am a full-stack developer and graphic designer specializing in the MERN stack (MySQL, Express, React, Node). I also bring more than 10 years of experience managing award-winning <Link to="/print">print and digital publications</Link> to developing efficient, user-friendly software solutions.</div> 
                        <div>A New Orleans native, I am an avid marathon runner and enjoy <Link to="/photography">photography</Link>, the outdoors and traveling with my wife, Rebecca.</div>
                    </div>     
                </div>
            </div>
            <div className="aboutRows">
                { Object.keys(mySkills).map((skills, i) => {
                    const { name , tech } = mySkills[skills]
                    console.log(name, tech)
                    return (
                        <div className="aboutContainers"  id ={`skills${i}`}>
                            <div className="aboutMeSkills">{name}</div>
                            <div className="lightGray">
                                {(tech).map((language, j) => {
                                    const altText = language.replace(/\.[^/.]+$/, "")
                                    Object.keys(mySkills).length === (i+1) && tech.length === (j+1) ? this.setState({isLoaded: true}) : "" 
                                    return(
                                        <img className='skillIcon' id={`Tech${j}`} src= {imageLink + language} alt={altText}/>
                                    )
                                })}
                            </div>
                        </div>
                    )})
                }
            </div>
            <Legend/>
        </div>
            
        ) : "";
    }
}

const mapDispatchToProps = dispatch =>{
    return{
         Header: (page) => dispatch(SetHeader(page))
    }
 }

export default connect(null, mapDispatchToProps)(About);
