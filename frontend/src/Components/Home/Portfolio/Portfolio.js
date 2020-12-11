import React from "react";
import cssPortfolio from "./portfolio.module.css";
import Carousel from 'react-bootstrap/Carousel';
import {portfolioSamples} from './Port_Dependencies'

const Portfolio = () =>{
    return(
        <div className={cssPortfolio.fadeIn}>
            <div className={cssPortfolio.artDirection}>Portfolio</div>
            <div className={cssPortfolio.portfolioProjectDescriptions}>
                Most of my professional work as a full-time software developer over the past year-and-a-half has been for a website exclusively accessible to employees and clients of my company – hence, I am unable to showcase this work on my personal webpage. However, here are two freelance projects, and one personal project, that I developed and deployed during 2020.
                <br/><br/>
                You can see more of my personal projects, as well as indepedent learning and certification pursuits, on my <a href="https://github.com/GregRoques" target="_blank">GitHub page</a>.
            </div>
            <div className={cssPortfolio.portfolioDisplayContainerLarge}>
                <Carousel className={cssPortfolio.photographyContainer} indicators={false}>
                    {portfolioSamples.map(sample=>{
                        return(
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={sample.image}
                                alt={sample.name}
                                />
                                <Carousel.Caption>
                                    <div className={cssPortfolio.portfolioCarouselCaptionContainer}>
                                        <h2>{sample.name}</h2>
                                        <p>
                                            {sample.description}<br/>
                                        <a 
                                            className={cssPortfolio.portfolioCarouselHyperlink}
                                            href={sample.demo}
                                            target ="_blank"
                                        >
                                            Demo
                                        </a>
                                        <span style={{margin: "0px 8px", color: "white"}}>|</span>
                                        <a 
                                            className={cssPortfolio.portfolioCarouselHyperlink}
                                            href={sample.readMe}
                                            target ="_blank"
                                        >
                                            GitHub
                                        </a>
                                        </p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
            <div className={cssPortfolio.portfolioDisplayContainerSmall}>
                    {portfolioSamples.map((sample,i) => {
                        return(
                            <div className={cssPortfolio.portfolioSmallMarginBottom}> 
                                <div className={cssPortfolio.portfolioSmall}>
                                    <img src={sample.image} alt={sample.name}/>
                                </div>
                                <div className={cssPortfolio.portfolioSmallimgDescription}>{sample.name}</div>
                                <div className={cssPortfolio.portfolioSmallCaptionContainer}>
                                                {sample.description}<br/>
                                    <a 
                                        className={cssPortfolio.portfolioSmallHyperlink}
                                        href={sample.demo}
                                        target ="_blank"
                                    >
                                        Demo
                                    </a>
                                    <span style={{margin: "0px 8px", color: "white"}}>|</span>
                                    <a 
                                        className={cssPortfolio.portfolioSmallHyperlink}
                                        href={sample.readMe}
                                        target ="_blank"
                                    >
                                        GitHub
                                    </a>
                                </div>
                                { i !== portfolioSamples.length -1 ?
                                <hr style={{margin:'1rem 10%', width: '80%'}} />
                                : null}
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Portfolio;