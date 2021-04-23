import React from 'react';
import { Link } from 'react-router-dom';
import cssAbout from './about.module.css';
import ImageLoader from '../../ImgLoader/imgLoader';

const About = () => {
    return (
        <div>
            <div className={cssAbout.portraitCenterSmall}>
                <ImageLoader className={cssAbout.portrait} alt='Greg_Roques_Headshot' src='/images/headShots/myPic.jpg'/>
            </div>
            <div className={cssAbout.aboutMeHeader}>About</div>
            <div className='whoAmIPadding'>
                <div className={cssAbout.aboutMeText}>
                    <div></div> 
                    I am an Atlanta, GA based communications professional with more than 10 years media experience, 
                    including more than 8 years as an <Link to='/design'>editor/art director</Link> for 
                    both internal and external corporate and media publications; I also bring an additional 
                    2+ years serving as a disaster communications manager.
                    <br/><br/>
                    A New Orleans native, I am an avid long-distance runner and 
                    enjoy <Link to='/photography'>photography</Link>, music, and 
                    spending time with my wife, Rebecca, and our two cats. I am also 
                    active with the Anti-Defamation League — Southeast chapter, and am a 
                    regular contributor to <a href='https://www.whereyat.com' rel="noopener noreferrer" target="_blank"><i>Where Y’at 
                    Magazine</i></a>. Samples of my writing and photography 
                    contributions to the later can be found below.
                </div>     
            </div>
        </div>
    );
}


export default About;
