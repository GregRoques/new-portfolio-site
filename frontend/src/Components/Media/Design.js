import React, {Component} from "react";
import Photography from './Photography'
import Magazines from './Magazines'
import Articles from './Articles'
import "./Design.css";
// import InstaGallery from '../Photography/instaGallery';


class Design extends Component{
    state={
        testemonials: false
    }
    
    componentDidMount(){

    }

    TestmonialDisplay = ({testmonialIndex}) =>{
        const {testemonials} = this.state;
        return testemonials ? (
            <div>
                <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
                <div className="cssDesign.testemonial">
                    "{testemonials[testmonialIndex].recommendation}"
                </div>
                <div className="cssDesign.recommender">
                    –{testemonials[testmonialIndex].name}, {testemonials[testmonialIndex].title}; (<i>{testemonials[testmonialIndex].workedWith}</i>)
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
            </div>
        )
    }
}

export default Design;