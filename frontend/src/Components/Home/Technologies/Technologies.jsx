import React, { Component } from "react";
import cssTech from "./technologies.module.css";
import { mySkills, imageLink } from './About_Technologies'

class Tech extends Component{

    
    render(){
        return(
        <div>
            <div className={cssTech.techHeader}>Skills</div>
            <div className={cssTech.techRows}>
                { Object.keys(mySkills).map((skills, i) => {
                    const { name , tech } = mySkills[skills]
                    console.log(name, tech)
                    return (
                        <div className={cssTech.techContainers}  id ={`skills${i}`}>
                            <div className={cssTech.techSkills}>{name}</div>
                            <div className={cssTech.lightGray}>
                                {(tech).map((language, j) => {
                                    const altText = language.replace(/\.[^/.]+$/, "").replaceAll("_", " ")
                                    return(
                                        <img className={cssTech.skillIcon} title={altText} id={`Tech${j}`} src= {imageLink + language} alt={altText}/>
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
