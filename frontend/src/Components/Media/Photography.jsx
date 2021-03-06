import React from "react";
import cssDesign from './media.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import {musicPhotos} from '../../Dependencies/Design_MusicPhotos'

const Photography = () =>{

        return(
            <div>
                <div className={cssDesign.artDirection}>Photography</div>
                <div className={cssDesign.designPhotoCenter}>
                    <Carousel className={cssDesign.photographyContainer} indicators={false}>
                        {musicPhotos.map(musician=>{
                            return(
                                <Carousel.Item key={musician.band}>
                                    <img
                                    className="d-block w-100"
                                    src={musician.image}
                                    alt={musician.band}
                                    />
                                    <Carousel.Caption>
                                        <p className={cssDesign.designPhotoCaptionContainer}>
                                        { musician.target === "LINK" ?
                                        <Link className={cssDesign.designPhotoHyperlink} to="/photography">
                                            Full Gallery
                                        </Link>
                                        :  <a 
                                        className={cssDesign.designPhotoHyperlink}
                                        href={musician.website}
                                        target ="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {musician.band}
                                    </a>
                                    }
                                       
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        )
}

export default Photography;