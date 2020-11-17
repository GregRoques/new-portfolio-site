import React, {Component} from "react";
import { Link }  from 'react-router-dom';
import "./HeadFoot.css"



class Header extends Component{ 
    render(){
        return(
            <div className="header">
                <Link style={{ textDecoration: 'none' }} to="/"><div title="Home Page" className="leftNav">Greg Roques</div></Link>

                <div className ="rightNav">
                    <div key={this.props.header} className="typeTitle">
                        {`<!--`}{this.props.header}{`-->`}
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Header;