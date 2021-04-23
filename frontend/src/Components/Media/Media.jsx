import React from "react";
import Photography from './Photography';
import About from './About/About';
import Articles from './Articles';
import Film from './Film'
import TestimonialDisplay from '../TestimonialWidget/Testimonials';
import cssMedia from './media.module.css';

const Media = () => {
    window.scrollTo(0, 0)
    return(
        <div className={cssMedia.fadeIn} style={{margin: '0 0 10rem 0'}}>
            <About/>
            <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
            <div id="writing">
                <Articles/>
            </div>
            <TestimonialDisplay
                testmonialIndex="even"
            />
            <div id="photography">
                <Photography/>
            </div>
            <TestimonialDisplay
                testmonialIndex="odd"
            />
            <div id="social">
                <Film/>
            </div>
        </div>
    )
}
export default Media;