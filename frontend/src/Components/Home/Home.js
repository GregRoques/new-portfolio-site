import React, {Component, lazy, Suspense} from 'react';
import Spinner from 'react-bootstrap/Spinner'
import About from "./About";
const Technologies = lazy(()=>{import( "./Technologies") });
const Portfolio = lazy(()=>{import( "./Portfolios") });
const Recomendations = lazy(()=>{import( "./Recomendations") });

class Home extends Component{
    render(){
        return(
            <div>
                <Suspense fallback={<Spinner animation="border" role="status"/>}>

                </Suspense>
            </div>
        )
    }
}