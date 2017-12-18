import React, { Component } from 'react';
import Photo from '../Photo/Photo.js';
import mdui from 'mdui';
import './Content.css';
import { Router, Route } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <Router>
                <div className="mdui-container app-content">
                    <Route path="photo" component={Photo} />
                </div>
                {/* <Route exact path="photo" component={Photo} /> */}
            </Router>

        );
    }
}
export default Content;
