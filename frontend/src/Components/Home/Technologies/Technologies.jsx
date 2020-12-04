import React, { Component } from "react";
import "./technologies.css";
import { mySkills, imageLink } from './About_Technologies'

class Tech extends Component{

    
    render(){
        return(
        <div>
            <div className="techHeader">Skills</div>
            <div className="aboutRows">
                { Object.keys(mySkills).map((skills, i) => {
                    const { name , tech } = mySkills[skills]
                    console.log(name, tech)
                    return (
                        <div className="aboutContainers"  id ={`skills${i}`}>
                            <div className="aboutMeSkills">{name}</div>
                            <div className="lightGray">
                                {(tech).map((language, j) => {
                                    const altText = language.replace(/\.[^/.]+$/, "").replaceAll("_", " ")
                                    return(
                                        <img className='skillIcon' title={altText} id={`Tech${j}`} src= {imageLink + language} alt={altText}/>
                                    )
                                })}
                            </div>
                        </div>
                    )})
                }
            </div>
        </div>
        )
    }
}

export default Tech;
