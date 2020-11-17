import React, { Component } from "react";
import { Redirect }  from 'react-router-dom';
import { css } from "emotion";
import "./Home.css"

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'

const disappearTime = 1;

const disappearingClass = css`
    opacity: 0;
    transition: ${disappearTime}s all;
`;

const scalingClass = css`
    transform: scale(0);
    transition: 0.75s all;
`;

const pages = ["About", "Web", "Print"]

const Circle = ({name, handler, className}) => {
    const lowerCaseName = name.toLowerCase();
    return (
        <div className={`padding768 circlesJustify ${className}`}>
            <div onClick={ () => handler(lowerCaseName)} className={`${lowerCaseName} innerCircle`}>{name}</div>
        </div>                
    )
}
class Home extends Component{

    componentDidMount() {
        this.props.Header("Software Developer");
        window.scrollTo(0, 0);
    }
    state = {
        thisCategory: '/',
        nextPage: false,
        redirect: false    
    }

    pageHandler = nextPage => {

        const stateObj = {
            nextRoute: nextPage,
            nextPage: true,
        }

        pages.forEach(page => {
            let lowerCase = page.toLowerCase()
            if (lowerCase === nextPage) {
                stateObj[`${lowerCase}Class`] = scalingClass
            } else {
                stateObj[`${lowerCase}Class`] = disappearingClass
            }
        })

        this.setState(stateObj)

        setTimeout(() => {
            this.setState({redirect: true})
        }, 1000 * disappearTime)        
    }
    
    render(){
        return(
            <div className="homeBody fadeIn">
                {this.state.redirect && <Redirect push to={`${this.state.nextRoute}`}/>}
                {pages.map((page, i)=>{
                    let className = this.state[`${page.toLowerCase()}Class`]
                    return (
                        <Circle 
                            key ={i}
                            handler={this.pageHandler}
                            className={className}
                            name={page}                            
                        />    
                    )
                }
                )}                
            </div>
        )
      
    }

}

const mapDispatchToProps = dispatch =>{
    return{
         Header: (page) => dispatch(SetHeader(page))
    }
 }

export default connect(null, mapDispatchToProps)(Home);