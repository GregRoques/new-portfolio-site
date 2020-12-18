import React from 'react';
import cssHome from './home.module.css'
import Tech from "./Technologies/Technologies";
import About from "./About/About";
import Portfolio from './Portfolio/Portfolio';

const Home = () =>{
    window.scrollTo(0, 0)
    return(
        <div className={cssHome.fadeIn} style={{margin: '0 0 10rem 0'}}>
            <About/>
            <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
            <Tech/>
            <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
            <Portfolio/>
        </div>
        )
}

export default Home;