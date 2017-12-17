import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,HashRouter, Route } from 'react-router-dom';
import './index.css';
import App from './Components/App/App.js';
import Content from './Components/Content/Content.js';
import registerServiceWorker from './Util/registerServiceWorker';
ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={App} />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
