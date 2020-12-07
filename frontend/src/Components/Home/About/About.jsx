import React from "react";
import { Link } from "react-router-dom";
import cssAbout from "./about.module.css";


const About = ()=>{
    return (
        <div>
            <div className={cssAbout.portraitCenterSmall}>
                <img className={cssAbout.portrait} alt="Greg_Roques_Headshot" src="/images/homepage/myPic.jpg"/>
            </div>
            <div className={cssAbout.aboutMeHeader}>About Me</div>
            <div className='whoAmIPadding'>
            
                <div className={cssAbout.aboutMeText}>
                    <div>I am a full-stack developer and graphic designer specializing in the MERN stack (MySQL, Express, React, Node). I also bring more than 10 years of experience managing award-winning <Link to="/media">print and digital publications</Link> to developing efficient, user-friendly software solutions.</div> 
                    <div>A New Orleans native, I am an avid marathon runner and enjoy photography, the music, traveling, and hanging out with my wife, Rebecca and our two cats.</div>
                </div>     
            </div>
        </div>
    );
}


export default About;
