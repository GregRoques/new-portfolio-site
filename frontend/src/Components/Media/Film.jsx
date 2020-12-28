import React from 'react';
import cssFilm from './design.module.css';

const Film = () =>{
    return(
        <div>
            <div className={cssFilm.artDirection}>Extra</div>
            <div className={cssFilm.designDescriptions}>
                For five years in the early ‘10s, my <a href='https://www.whereyat.com' target='_blank' rel="noopener noreferrer"><i>Where Y’at Magazine</i></a> co-workers and I participated in the annual <a href='https://www.48hourfilm.com/home' target='_blank' rel="noopener noreferrer">New Orleans’ 48 Hour Film Project</a> as a team building exercise. Three of our shorts (including the one below) took home judge’s awards, <a href='https://www.imdb.com/name/nm5480072/?ref_=nv_sr_1?ref_=nv_sr_1' rel="noopener noreferrer" target="_blank">one of which</a> was subsequently accepted into a regional festival. Below is my favorite of our efforts, a parody of the increasingly dark and mature nature of super hero films around that time.
                <br/><br/>
                The cinematography and editing experience would assist me in a subsequent position directing <a href='https://www.youtube.com/playlist?list=PLM2GdNHvfSCFxXlNNVB8nrR0ogbg59Pbd' target='_blank' rel="noopener noreferrer">social media content</a> and digital strategy. I later <a href='https://www.youtube.com/playlist?list=PLM2GdNHvfSCEaQ_nVee4e1CVi4s8FumaX' target='_blank' rel="noopener noreferrer">created and taught a class</a> detailing how to quickly film, edit and post a video live from an event for Tulane University's Community Partner network in 2018. 
            </div>
            <div className={cssFilm.videoAlign}>
                <iframe title="The Picture Hunt" width="560" height="315" src="https://www.youtube.com/embed/seAiVYhv3ls" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Film;
