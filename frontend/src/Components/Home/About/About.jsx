import React from 'react';
import { Link } from 'react-router-dom';
import cssAbout from './about.module.css';

const About = () => {
    return (
        <div>
            <div className={cssAbout.portraitCenterSmall}>
                <img className={cssAbout.portrait} alt='Greg_Roques_Headshot' src='/images/headShots/myPic.jpg'/>
            </div>
            <div className={cssAbout.aboutMeHeader}>About</div>
            <div className='whoAmIPadding'>
                <div className={cssAbout.aboutMeText}>
                    <div>I am an Atlanta, GA based full-stack developer and graphic designer specializing in the MERN stack (MySQL, Express, React, Node). I also bring more than 10 years of experience managing award-winning <Link to='/media'>print and digital publications</Link> to developing efficient, user-friendly software solutions.</div> 
                    <div>A New Orleans native, I am an avid long-distance runner and enjoy <Link to='/photography'>street and music photography</Link>, music, and spending time with my wife, Rebecca, and our two cats.</div>
                </div>     
            </div>
        </div>
    );
}


export default About;
