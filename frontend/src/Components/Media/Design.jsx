import React, {Component} from "react";
import axios from 'axios';
import ReactHtmlParser from "react-html-parser";
import Photography from './Photography';
import Magazines from './Magazines';
import Articles from './Articles';
import {grAPI} from "../../Dependencies/BackendAPI";
import InstaGallery from '../InstaWidget/instaGallery';
import cssDesign from './design.module.css'


class Design extends Component{
    state={
        testemonials: [false, false]
    }
    
    componentDidMount(){
        axios.get(`${grAPI}/linkedIn`).then(res=>{
            const recommendations = res.data; 
            this.setState({
                testemonials: recommendations
            })
        })
    }

    TestmonialDisplay = ({testmonialIndex}) =>{
        const {testemonials} = this.state;
        return testemonials[testmonialIndex] ? (
            <div className={cssDesign.testemonialContainer}>
                <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
                <div className={cssDesign.testmonialDisclaimer}>via LinkedIn Recommendations</div>
                <div className={cssDesign.testemonial}>
                    "{ ReactHtmlParser(testemonials[testmonialIndex].recommendation)}"
                </div>
                <div className={cssDesign.recommender1}>
                    –{testemonials[testmonialIndex].name}, {testemonials[testmonialIndex].title} 
                </div>
                <div className={cssDesign.recommender2}>
                    (<i>{testemonials[testmonialIndex].workedWith}</i>)
                </div>
                <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
            </div>
        ) : <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>;
    }

    render(){
        const {TestmonialDisplay} = this;
        return(
            <div className={cssDesign.fadeIn} style={{margin: '0 0 10rem 0'}}>
                <div className={cssDesign.artDirection}>
                    Media
                </div>
                <div className={cssDesign.designDescriptions}>
                Before becoming a full-time software developer, I worked as a creative in the media/communications field. The skills I developed during this time have been indispensable to my current work. My decade of graphic design and layout experience has allowed me to guide UI/UX best practices; likewise my more than eight years in leadership roles as a manager and director have allowed me to successfully partner with multiple SCRUM-teams within my organization to see projects through to completion.
                <br/><br/>
                I continue to contribute freelance works to various publications on a freelance basis. Below is a sample of my published design, photography and writing contributions.
                </div>
                <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
                {window.scrollTo(0, 0)}
                <Magazines/>
                <TestmonialDisplay
                    testmonialIndex={0}
                />
                <Photography/>
                 <TestmonialDisplay
                    testmonialIndex={1}
                />
                <Articles/>
            </div>
        )
    }
}

export default Design;