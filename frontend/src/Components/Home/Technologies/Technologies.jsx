import React, { Component } from "react";
import "./technologies.css";
import { mySkills, imageLink } from './About_Technologies'

class Tech extends Component{

    
    render(){
        return(
        <div>
            <div className="techHeader">Skills</div>
            <div className="techRows">
                { Object.keys(mySkills).map((skills, i) => {
                    const { name , tech } = mySkills[skills]
                    console.log(name, tech)
                    return (
                        <div className="techContainers"  id ={`skills${i}`}>
                            <div className="techSkills">{name}</div>
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
