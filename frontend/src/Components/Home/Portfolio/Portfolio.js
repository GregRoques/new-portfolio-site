import React from "react";
import "./Design.css";
import Carousel from 'react-bootstrap/Carousel';
import {portfolioSamples} from './Port_Dependencies'

const Portfolio = () =>{
    return(
        <div className="fadeIn">
            <div className="artDirection">Portfolio</div>
            <div className="portfolioDisplayContainerLarge">
                <Carousel className="photographyContainer" indicators={false}>
                    {portfolioSamples.map(sample=>{
                        return(
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={sample.image}
                                alt={sample.name}
                                />
                                <Carousel.Caption>
                                    <h3 className="designPhotoBandName">{sample.band}</h3>
                                    <p className="designPhotoCaptionContainer">
                                        {sample.description}<br/>
                                    <a 
                                        className="designPhotoHyperlink"
                                        href={sample.demo}
                                        target ="_blank"
                                    >
                                        Demo
                                    </a>
                                    <span style={{margin: "0px 8px", color: "white"}}>|</span>
                                    <a 
                                        className="designPhotoHyperlink"
                                        href={sample.readMe}
                                        target ="_blank"
                                    >
                                        GitHub
                                    </a>
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
            <div className="portfolioDisplayContainerSmall">
                <div className="artDirection">Design</div>
                <div className='magGrid'>
                    {(Object.keys(magList)).map((num,i) => {
                        return(
                            <div className="mags"> 
                                <img src={sample.image} alt={sample.name}/>
                                <div className="imgDescription">{sample.description}</div>
                                <div className="designPhotoCaptionContainer">
                                                {sample.description}<br/>
                                    <a 
                                        className="designPhotoHyperlink"
                                        href={sample.demo}
                                        target ="_blank"
                                    >
                                        Demo
                                    </a>
                                    <span style={{margin: "0px 8px", color: "white"}}>|</span>
                                    <a 
                                        className="designPhotoHyperlink"
                                        href={sample.readMe}
                                        target ="_blank"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;