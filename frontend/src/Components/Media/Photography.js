import React from "react";
import "./Design.css";
import Carousel from 'react-bootstrap/Carousel';
import {musicPhotos} from '../../Dependencies/Design_MusicPhotos'

const Photography = () =>{

        return(
            <div className="fadeIn">
                <div className="artDirection">Photography</div>
                <div className="designPhotoCenter">
                    <Carousel className="photographyContainer" indicators={false}>
                        {musicPhotos.map(musician=>{
                            return(
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={musician.image}
                                    alt={musician.band}
                                    />
                                    <Carousel.Caption>
                                        <h3 className="designPhotoBandName">{musician.band}</h3>
                                        <p className="designPhotoCaptionContainer">
                                        <a 
                                            className="designPhotoHyperlink"
                                            href={musician.website}
                                            target ={musician.target}
                                        >
                                            More Images
                                        </a>
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