import React, {Component} from "react";
// import Photography from './Photography'
import Magazines from './Magazines'
import Articles from './Articles'
import "./Design.css";
// import InstaGallery from '../Photography/instaGallery';


class Design extends Component{
    state={
        testemonials:[]
    }
    componentDidMount(){

    }
    
    Testmonial = ({recommendation}) =>{
        const {name, title, workedWith, recommendation} = recommendation
        return(
            <div>
                <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
                <div className="cssDesign.testemonial">
                    "{recommendation}"
                </div>
                <div className="cssDesign.recommender">
                    –{name}, {title}; {workedWith}
                </div>
                <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
            </div>
        )
    }

    render(){
        const {Testmonial} = this;
        const {testemonials} = this.state;
        return(
            <div className="fadeIn" style={{margin: '0 0 10rem 0'}}>
                {window.scrollTo(0, 0)}
                <Magazines/>
                <Testemonials
                    recommendation={testemonials[0]}
                />
                {/* <Photography/> */}
                 <Testemonials
                    recommendation={testemonials[1]}
                />
                <Articles/>
            </div>
        )
    }
}

export default Design;