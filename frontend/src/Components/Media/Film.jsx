import React from 'react';
import cssFilm from './design.module.css';

const Film = () =>{
    return(
        <div>
            <div className={cssFilm.artDirection}>Extra</div>
            <div className={cssFilm.designDescriptions}>
                For five years in the early ‘10s, I co-organized a team with some co-workers from <a href='https://www.whereyat.com' target='_blank' rel="noopener noreferrer"><i>Where Y’at Magazine</i></a> to participate in the annual <a href='https://www.48hourfilm.com/home' target='_blank' rel="noopener noreferrer">New Orleans’ 48 Hour Film Project</a> as a team building exercise. Three of our films (including the one below) took home judge’s awards, and an <a href='https://www.imdb.com/name/nm5480072/?ref_=nv_sr_1?ref_=nv_sr_1' rel="noopener noreferrer" target="_blank">extended cut</a> of one of our shorts was later accepted into additional festivals outside of Louisiana. Below is my favorite of our efforts, a parody of the increasingly dark and mature nature of super hero films around that time.
                <br/><br/>
                I regularly contributed as a writer, cinematographer and music supervisor; these skills would assist me in a subsequent position where I directed the creation of <a href='https://www.youtube.com/playlist?list=PLM2GdNHvfSCFxXlNNVB8nrR0ogbg59Pbd' target='_blank' rel="noopener noreferrer">social-media videos</a> as part of our regional digital strategy. 
            </div>
            <div className={cssFilm.videoAlign}>
                <iframe title="The Picture Hunt" width="560" height="315" src="https://www.youtube.com/embed/seAiVYhv3ls" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Film;
