import React, { Component } from "react";
import "./About.css";
import { mySkills, imageLink } from './About_Technologies'

class About extends Component{
    state={
        isLoaded: false
    }
    
    render(){
        return isLoaded ? (
        <div className="fadeIn">
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
        </div>
        ) : "";
    }
}

export default About;
