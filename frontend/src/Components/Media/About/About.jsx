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
                    Marketing and Communications professional offering 10+ years experience in editorial and art direction, brand positioning, event planning, communications and media training, and social and web content creation and strategy. 
                    <br/><br/>
                    This includes 8+ years as an editor/<Link to='/photography'>art director</Link> of print and digital publications for both corporate and media enterprises. I also bring an additional 2+ years experience developing presentations for and training key stakeholders, state representatives and senior leadership to serve as brand and campaign ambassadors.
                    <br/><br/>
                    A New Orleans native, I am an avid long-distance runner and 
                    enjoy <Link to='/photography'>photography</Link>, music, and 
                    spending time with my wife, Rebecca, and our two cats. I am also 
                    active with the Anti-Defamation League — Southeast chapter, and am a 
                    regular contributor to <a href='https://www.whereyat.com' rel="noopener noreferrer" target="_blank"><i>Where Y’at 
                    Magazine</i></a>. Samples of my writing and photography 
                    contributions to the latter can be found below.
                </div>     
            </div>
        </div>
    );
}


export default About;
