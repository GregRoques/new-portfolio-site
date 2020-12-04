import React, {Component} from 'react';
import cssHome from "./module.home.css"
import Tech from "./Technologies/Technologies";
import About from "./About/About";

class Home extends Component{
    render(){
        return(
            <div>
               <About/>
               <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
               <Tech/>
               <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
            </div>
        )
    }
}

export default Home;