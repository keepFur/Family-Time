import React from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuth from './fakeAuth.js';
const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated ? (
        <p>
            Welcome!
            <button onClick={() => {
                fakeAuth.signout(() => history.push('/'));
            }}>
                signout
            </button>
        </p>
    ) : (
            <p>You are not logged</p>
        )
));

export default AuthButton;