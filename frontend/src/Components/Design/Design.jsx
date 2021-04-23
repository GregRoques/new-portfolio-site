import React from 'react';
import cssHome from './design.module.css';
import TestimonialDisplay from '../TestimonialWidget/Testimonials';
import Skills from "./Technologies/Technologies";
import Print from "./Print/Print";
import Web from './Web/Web';

const Design = () =>{
    window.scrollTo(0, 0)
    return(
        <div className={cssHome.fadeIn} style={{margin: '0 0 10rem 0'}}>
            <div className={cssHome.artDirection}>
                Design
            </div>
            <div className={cssHome.designDescriptions}>
            I have 8+ years layout and design experience, including more than 6 years serving as creative director for an award-winning monthly magazine with a 50k+ print distribution, in addition to 120k+ unique web visitors, per month. Recently, I have branched out into web development to expand my layout and design skills into the digital landscape. Example of both my print and web work can be found below.
            </div>
            <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
            <div id="print">
                <Print/>
            </div>
            <TestimonialDisplay
                    testmonialIndex="even"
            />
            <div id="web">
                <Web/>
            </div>
            <TestimonialDisplay
                    testmonialIndex="even"
            />
         
            <div id="skills">
                <Skills/>
            </div>
        </div>
    )
}

export default Design;