import React, {Component} from "react";
import axios from 'axios';
import ReactHtmlParser from "react-html-parser";
import Photography from './Photography'
import Magazines from './Magazines'
import Articles from './Articles'
import InstaWidget from '../InstaWidget/instaGallery'
import "./Design.css";


class Design extends Component{
    state={
        testemonials: false
    }
    
    componentDidMount(){
        axios.get('http://localhost:2000/linkedIn').then(res=>{
            const recommendations = res.data; 
            console.log(recommendations)
            this.setState({
                testemonials: recommendations
            })
        })
    }

    TestmonialDisplay = ({testmonialIndex}) =>{
        const {testemonials} = this.state;
        return testemonials ? (
            <div>
                <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
                <div className="cssDesign.testemonial">
                    "{ ReactHtmlParser(testemonials[testmonialIndex].recommendation)}"
                </div>
                <div className="cssDesign.recommender">
                    –{testemonials[testmonialIndex].name}, {testemonials[testmonialIndex].title} <br/> <i>{testemonials[testmonialIndex].workedWith}</i>
                </div>
                <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
            </div>
        ) : <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>;
    }

    render(){
        const {TestmonialDisplay} = this;
        return(
            <div className="fadeIn" style={{margin: '0 0 10rem 0'}}>
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
                <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
                <InstaWidget/>
            </div>
        )
    }
}

export default Design;