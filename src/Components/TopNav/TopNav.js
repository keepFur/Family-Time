import React, { Component } from 'react';
import mdui from 'mdui';
import './TopNav.css';

class TopNav extends Component {
    handleClick(event) {
        var display = document.getElementById('mdui-aside-nav').style.display;
        if (display === '' || display === 'flex') {
            document.getElementById('mdui-aside-nav').style.display = 'none';
        } else {
            document.getElementById('mdui-aside-nav').style.display = 'flex';
        }
    }
    render() {
        return (
            <div className="mdui-appbar mdui-appbar-fixed  mdui-shadow-2">
                <div className="mdui-toolbar mdui-color-theme">
                    <a className="mdui-btn mdui-btn-icon" onClick={() => { this.handleClick() }}><i className="mdui-icon material-icons">menu</i></a>
                    <a href="javascript:;" className="mdui-typo-headline">时光爱人</a>
                    <a href="javascript:;" className="mdui-typo-title">时光爱人</a>
                    <div className="mdui-toolbar-spacer"></div>
                    <div className="mdui-textfield mdui-textfield-expandable mdui-float-right">
                        <button className="mdui-textfield-icon mdui-btn mdui-btn-icon"><i className="mdui-icon material-icons">search</i></button>
                        <input className="mdui-textfield-input" type="text" placeholder="Search" />
                        <button className="mdui-textfield-close mdui-btn mdui-btn-icon"><i className="mdui-icon material-icons">close</i></button>
                    </div>
                    <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i className="mdui-icon material-icons">&#xe5c3;</i></a>
                    <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i className="mdui-icon material-icons">&#xe7f4;</i></a>
                    <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i className="mdui-icon material-icons">&#xe853;</i></a>
                </div>
            </div>
        );
    }
}
export default TopNav;
