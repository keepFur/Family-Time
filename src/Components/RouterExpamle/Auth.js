import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import AuthButton from './AuthButton.js';
import Public from './Public';
import Protected from './Proteced';
import Login from './Login.js';
import fakeAuth from './fakeAuth.js';
const Auth = () => (
    <Router>
        <div>
            <AuthButton />
            <ul>
                <li><Link to="/public">Public page</Link></li>
                <li><Link to="/protected">Protected page</Link></li>
            </ul>
            <br />
            <Route path="/public" component={Public}></Route>
            <Route path="/login" component={Login}></Route>
            <PrivateRoute path="/protected" component={Protected} />
        </div>
    </Router>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        fakeAuth.isAuthenticated ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
    )} />
);

export default Auth;