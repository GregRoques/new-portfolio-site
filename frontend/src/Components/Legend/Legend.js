import React, { Component } from "react";
import { Link }  from 'react-router-dom';
import cssLegend from "./Legend.module.css"

let mainLinks = ['projects', 'about', 'blog']

class Legend extends Component {
    state={
        isOmitted: ""
    }
    componentDidMount(){
        const isOmitted = window.location.pathname
        this.setState({
            isOmitted
        })
    }
    render(){
        const {isOmitted} = this.state
        const isRemoved = mainLinks.indexOf(isOmitted)
        mainLinks.splice(isRemoved,1)
        return(
            <div className={cssLegend.redirectLinks}>
                <Link className={cssLegend.linkLayout} to="/">Home </Link> | 
                {mainLinks.map((page, i)=>{
                    return(
                        <span>
                            <Link className={cssLegend.linkLayout} to={`/${page}`}> {page} </Link> {i === 0 ? ' | ': '' }
                        </span>
                    )
                })
        
        }
        </div>
        )
    }
}

export default Legend;