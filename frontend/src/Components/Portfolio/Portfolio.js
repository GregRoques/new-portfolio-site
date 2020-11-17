import React, { Component } from "react";
import { projectDetails, ProjectList, ProjectOnDisplay } from "./Port_Dependencies";
import Legend from "../Legend/Legend";
import "./Portfolio.css";

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'


const ProjectOnDisplay = ({title}) =>{
    const display = projectDetails[title]
    const headerImageLink = 'images/portfolioImages/'
    const languageImageLink = 'images/technologies/'
    
    return(
        <div className='grayColumnContent'>
            <div className= 'nonVidPicColumn'>
                <img className="picPortfolio p1" src= { headerImageLink + display['image']+['1.png']} alt={display['name']}/>
                <img className="picPortfolio p2" src= { headerImageLink + display['image'] + ['2.png']} alt={display['name']}/>
            </div>
            <div className='nonVidTextColumn'>
                <div className="profileProjectName">{display['name']}</div>
                <div className="profileHeader">{'//'} {display['type']}</div>
                <div className='profileParagraphFont'>{display['description']}</div>

                <div className='buttonAlign v1'>
                    <span><a target="_blank" rel="noopener noreferrer" href={display['demo']}>
                        <button className="demoReadButtons">
                            { display['demo'].includes('youtube', -1) ? `${'Video'}` : `${'Live Demo'}` }
                        </button>
                    </a></span>
                    <span><a target="_blank" rel="noopener noreferrer" href={display['readMe']}>
                        <button className="demoReadButtons">Read Me</button>
                    </a></span>
                </div>
            </div>
            <div className="buttonsSmallerBlock">
                <div className='buttonAlign v2'>
                    <span><a target="_blank" rel="noopener noreferrer" href={display['demo']}>
                        <button className="demoReadButtons">
                            { display['demo'].includes('youtube', -1) ? `${'Video'}` : `${'Live Demo'}` }
                        </button>
                    </a></span>
                    <span><a target="_blank" rel="noopener noreferrer" href={display['readMe']}>
                        <button className="demoReadButtons">Read Me</button>
                    </a></span>
                </div>
            </div>
            {display['languages'].map((language, i) => {
                const altText = language.replace(/\.[^/.]+$/, "")
                return(
                    <img className='devStyle' key={i} src= {languageImageLink + language} alt={altText}/>
                    )
                })}
        </div>
    )
}

class Portfolio extends Component{

    componentDidMount() {
        this.props.Header("Projects");
        window.scrollTo(0, 0);
    }

    state = {
        isLoaded: false
    }

    render(){
        return isLoaded ?(
            <div className="portfolioStyling fadeIn">
                <div className='parameters'>
                    {Object.keys(projectDetails).map((project, i) => {
                        Object.keys(projectDeatails) === (i+1) ? this.setState({isLoaded: true}) : "";
                        return (
                            <div className="profileRowBackground">
                                <ProjectOnDisplay key={i} title={project} /> 
                            </div>
                        )
                    })}
                </div>
                {/* <div>Class Projects YouTube Link Goes Here...maybe?</div> */}
                <Legend/>
            </div>
        ) : "";
    }
}

const mapDispatchToProps = dispatch =>{
   return{
        Header: (page) => dispatch(SetHeader(page))
   }
}

export default connect(null, mapDispatchToProps)(Portfolio);