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
            console.log(recommendations)
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
                <InstaGallery/>
            </div>
        )
    }
}

export default Design;