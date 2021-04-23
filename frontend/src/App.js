import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// HOC
import Layout from "./Containers/Layout/Layout";
// Visitor Pages
import Design from './Components/Design/Design';
import Media from './Components/Media/Media'; 
import Photography from './Components/Photography/Photography'
import Pictures from './Components/Photography/Pictures'


class App extends Component {

  NoPage = () =>{
    return(
      <div>
          <Redirect push to={Media}/>
      </div>
    )
  }

  render() {
    return (
      <div>
         <Layout >
           <Switch>
                <Route path="/" exact component={Media}/>
                <Route exact path="/design" component={Design}/>
                <Route exact path="/photography" component={Photography}/>
                <Route exact path="/photography/:album" component={Pictures}/>
                <Route exact path='/resume' component={() => { 
                    window.location.href = "https://www.gregroques.com/Resume.pdf"; 
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
