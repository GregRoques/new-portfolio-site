import React from "react";
import cssPortfolio from "./web.module.css";
import Carousel from 'react-bootstrap/Carousel';
import {portfolioSamples} from './Web_Dependencies'

const Portfolio = () =>{
    return(
        <div className={cssPortfolio.fadeIn}>
            <div className={cssPortfolio.artDirection}>Web</div>
            <div className={cssPortfolio.portfolioDisplayContainerLarge}>
                <Carousel className={cssPortfolio.photographyContainer} indicators={false}>
                    {portfolioSamples.map(sample=>{
                        return(
                            <Carousel.Item key={sample.name}>
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
                                            {sample.demo_type ? 
                                                <span>
                                                    <a 
                                                        className={cssPortfolio.portfolioCarouselHyperlink}
                                                        href={sample.demo}
                                                        target ="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {sample.demo_type}
                                                    </a>
                                                    <span style={{margin: "0px 8px", color: "white"}}>|</span>
                                                </span>
                                            : "" }
                                            <a 
                                                className={cssPortfolio.portfolioCarouselHyperlink}
                                                href={sample.readMe}
                                                target ="_blank"
                                                rel="noopener noreferrer"
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
                            <div key={i} className={cssPortfolio.portfolioSmallMarginBottom}> 
                                <div className={cssPortfolio.portfolioSmall}>
                                    <img src={sample.image} alt={sample.name}/>
                                </div>
                                <div className={cssPortfolio.portfolioSmallimgDescription}>{sample.name}</div>
                                <div className={cssPortfolio.portfolioSmallCaptionContainer}>
                                    {sample.description}<br/>
                                    {sample.demo_type ? 
                                    <span>
                                        <a 
                                            className={cssPortfolio.portfolioSmallHyperlink}
                                            href={sample.demo}
                                            target ="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {sample.demo_type}
                                        </a>
                                        <span style={{margin: "0px 8px", color: "white"}}>|</span>
                                    </span>
                                    : "" }
                                    <a 
                                        className={cssPortfolio.portfolioSmallHyperlink}
                                        href={sample.readMe}
                                        target ="_blank"
                                        rel="noopener noreferrer"
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
            <div className={cssPortfolio.portfolioProjectDescriptions}>
                Additional works can be found on my <a href="https://github.com/GregRoques" rel="noopener noreferrer" target="_blank">GitHub page</a>.
            </div>
        </div>
    )
}

export default Portfolio;