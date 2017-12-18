import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Form from './Form.js';
const PreventingTransitionsExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/" >Form</Link></li>
                <li><Link to="/one">One</Link></li>
                <li><Link to="/two">Two</Link></li>
            </ul>
            <Route path='/' exact component={Form} />
            <Route path='/one' component={() => <div>One</div>} />
            <Route path='/two' component={() => <div>Two</div>} />
        </div>
    </Router>
);

export default PreventingTransitionsExample;