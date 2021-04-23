import React from "react";
import cssTech from "./technologies.module.css";
import { mySkills, imageLink } from './About_Technologies';
import ImageLoader from '../../ImgLoader/imgLoader'

const Tech = () =>{
    return(
    <div>
        <div className={cssTech.techHeader}>Skills</div>
        <div className={cssTech.techRows}>
            { Object.keys(mySkills).map((skills, i) => {
                const { name , tech } = mySkills[skills]
                return (
                    <div key={i} className={cssTech.techContainers}  id ={`skills${i}`}>
                        <div className={cssTech.techSkills}>{name}</div>
                        <div className={cssTech.lightGray}>
                            {(tech).map((language, j) => {
                                const altText = language.replace(/\.[^/.]+$/, "").replaceAll("_", " ")
                                return(
                                    <span key={j}>
                                        <ImageLoader className={cssTech.skillIcon} passKey={j} title={altText} id={`Tech${j}`} src= {imageLink + language} alt={altText}/>
                                    </span>
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

export default Tech;
