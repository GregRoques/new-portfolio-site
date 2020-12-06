import React from 'react';
import { Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

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

ReactDOM.render(
        <Router history={history}>
            <App/>
        </Router>, 
    document.getElementById('root')
);