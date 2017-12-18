import React from 'react';
import {
    Redirect
} from 'react-router-dom';
import fakeAuth from './fakeAuth.js';
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false
        };
    }
    login() {
        const cb = () => {
            this.setState({
                redirectToReferrer: true
            });
        };
        fakeAuth.authenticate(cb);
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            );
        }
        return (
            <div>
                <p>You must login in to view the page at {from.pathname}</p>
                {/* 此处不能写成 onClick={this.login},不然的话是会找不到this.state的 */}
                <button onClick={() => this.login()}>
                    Login in
                </button>
            </div>
        );
    }
}

export default Login;