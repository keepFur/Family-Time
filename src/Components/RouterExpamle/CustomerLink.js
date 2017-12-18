import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './index.js';
import About from './about.js';
const CustomerLink = () => (
    <Router>
        <div>
            <OldSchoolMenuLink activeOnlyWhenExact={true} to='/' lebal="Home" />
            <OldSchoolMenuLink to='/about' lebal="About" />
            <hr />
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
        </div>
    </Router>
);

const OldSchoolMenuLink = ({ lebal, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <div className={match ? 'active' : ''}>
            {match ? '>' : ''}
            <Link to={to}>{lebal}</Link>
        </div>
    )} />
);

export default CustomerLink;