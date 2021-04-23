import React, {Component} from 'react';
import cssFilm from './media.module.css';

const videoLinks = [
    {
        title: 'Tulane Class',
        video:"videoseries?list=PLM2GdNHvfSCEaQ_nVee4e1CVi4s8FumaX",
        description: "A class I taught the for the Tulane University Community Partner Nework. The class teaches participants how to record, edit and post a short video to one's social media outlets live from the scene of an event."
    },
    {
        title: 'Red Cross',
        video:"videoseries?list=PLM2GdNHvfSCFxXlNNVB8nrR0ogbg59Pbd",
        description:"Videos I created or directed for the American Red Cross of Louisiana's various social media accounts."
    },
    {
        title: "Where Y'at",
        video:"videoseries?list=PLM2GdNHvfSCFdCZM_rVoFJvLuYEMb3vMz",
        description:"Videos I created or directed for the Where Y'at Magazine's YouTube channel."
    },
    {
        title: 'Short Film',
        video: "seAiVYhv3ls",
        description: 'Below is my favorite of 48 Hour Film Fest efforts, a parody of the increasingly dark and mature nature of super hero films around that time.'
    }
]

class Film extends Component{
    state = {
        currVid: 0
      };

    onChangeHandler = (e) => {
        const { value } = e.target;
        this.setState({
          currVid: value,
        });
    };
    render(){
        const {onChangeHandler} = this;
        const {currVid} = this.state;
        return(
            <div>
                <div className={cssFilm.artDirection}>Social</div>
                <div className={cssFilm.designDescriptions}>
                    For five years in the early ‘10s, some co-workers and I participated in the annual <a href='https://www.48hourfilm.com/home' target='_blank' rel="noopener noreferrer">New Orleans’ 48 Hour Film Project</a> as a team building exercise. Three of our shorts (including the one below) took home judge’s awards, <a href='https://www.imdb.com/name/nm5480072/?ref_=nv_sr_1?ref_=nv_sr_1' rel="noopener noreferrer" target="_blank">one of which</a> was subsequently accepted into a regional festival. The cinematography and editing experience would assist me in a subsequent position directing <a href='https://www.youtube.com/playlist?list=PLM2GdNHvfSCFxXlNNVB8nrR0ogbg59Pbd' target='_blank' rel="noopener noreferrer">social media content</a> and digital strategy. I later <a href='https://www.youtube.com/playlist?list=PLM2GdNHvfSCEaQ_nVee4e1CVi4s8FumaX' target='_blank' rel="noopener noreferrer">created and taught a class</a> detailing how to quickly film, edit and post a video live from an event for Tulane University's Community Partner network in 2018. 
                </div>
                <div className={cssFilm.selectBarContainer}>
                    <select
                    className={cssFilm.selectBar}
                    onChange={onChangeHandler}
                    >
                    {videoLinks.map((vid, index) => {
                        return (
                        <option key={index} value={index} >
                            {index + 1}. {vid.title}
                        </option>
                        );
                    })}
                    </select>
                </div>
                <div className={cssFilm.videoAlign}>
                <iframe title="GR Videos" width="560" height="315" src={`https://youtube.com/embed/${videoLinks[currVid].video}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className={cssFilm.designVidDescriptions}>
                    <b>Description: </b> {videoLinks[currVid].description}
                </div>
            </div>
        )
    }
}

export default Film;