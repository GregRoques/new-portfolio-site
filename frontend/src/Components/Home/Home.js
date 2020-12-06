import React from 'react';
import Tech from "./Technologies/Technologies";
import About from "./About/About";

const Home = () =>{
    window.scrollTo(0, 0)
    return(
        <div style={{margin: '0 0 10rem 0'}}>
            <About/>
            <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
            <Tech/>
            <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
        </div>
        )
}

export default Home;