import React from 'react';
import cssFilm from './design.module.css';

const Film = () =>{
    return(
        <div>
            <div className={cssFilm.artDirection}>Short Films</div>
            <div className={cssFilm.designDescriptions}>
                For five years, I organized a team of creative’s from <a href='https://www.whereyat.com' target='_blank' rel="noopener noreferrer"><i>Where Y’at Magazine</i></a> to participate in the annual <a href='https://www.48hourfilm.com/home' target='_blank' rel="noopener noreferrer" >New Orleans’ 48 Hour Film Project</a> as a team building exercise. On the weekend of the competition each team would be assigned a set of story parameters on a Friday evening and given until sundown on Sunday to write shoot and edit a short film. I regularly participated in a writing, cinematography and music direction capacity. 
                <br/><br/>
                Three of our films (including the one below) took home judges awards, and an <a href='https://www.imdb.com/name/nm5480072/?ref_=nv_sr_1?ref_=nv_sr_1' rel="noopener noreferrer" target="_blank">extended cut</a> of one of our shorts was later accepted into a regional California film festival. Below is my favorite of our efforts, parodying the increasingly dark and mature nature of super hero films in the early ‘10s.
            </div>
            <div className={cssFilm.videoAlign}>
                <iframe title="The Picture Hunt" width="560" height="315" src="https://www.youtube.com/embed/seAiVYhv3ls" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Film;
