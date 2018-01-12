import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './assets/css/index.css';

import App from './App';
import Dashboard from './components/Dashboard';

import registerServiceWorker from './registerServiceWorker';
import WebFontLoader from 'webfontloader';

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    }
});

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/emissor/:emitter_id" component={Dashboard}></Route>
        </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
