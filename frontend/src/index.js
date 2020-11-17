import React from 'react';
import { Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./Reducers/RootReducer.js";

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { trackingId } from './AxiosOrders'

const history = createBrowserHistory();
ReactGA.initialize(trackingId);
history.listen(location => {
    ReactGA.set({ 
        page: location.pathname
    }); 
    ReactGA.pageview(location.pathname); 
  });


const theStore = createStore(
    reducers
)

ReactDOM.render(
    <Provider store={theStore}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>, 
    document.getElementById('root')
);