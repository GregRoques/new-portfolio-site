import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

// HOC
import Layout from "./Components/Layout/Layout";


// Visitor Pages
import Home from './Components/Home/Home';
import Media from './Components/Media' 
import Photography from './Components/Photography/Photography'
import Pictures from './Components/Photography/Pictures'


class App extends Component {

  NoPage = () =>{
    return(
      <div>
          <Redirect push to={Home}/>
      </div>
    )
  }

  render() {
    return (
      <div>
         <Layout >
           <Switch>
                <Route path="/" exact component={Home}/>
                <Route exact path="/media" component={Media}/>
                <Route exact path="/photography" component={Photography}/>
                <Route exact path="/photography/:album" component={Pictures}/>
                <Route exact path='/resume' component={() => { 
                    window.location.href = "https://www.gregroques.com/images/socialIcons/Resume.pdf"; 
                    return false;
                }}/>
                <Route component ={this.NoPage}/>
           </Switch>
        </Layout>
      </div>
    );
    
  }
}

export default App;
