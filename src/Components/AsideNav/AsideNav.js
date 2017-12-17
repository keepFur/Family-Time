import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import mdui from 'mdui';
import Photo from '../Photo/Photo.js';
import logo from '../App/logo.svg';
import './AsideNav.css';

class AsideNav extends Component {
    render() {
        return (
            <div className="mdui-aside-nav mdui-drawer mdui-shadow-4" id="mdui-aside-nav">
                <div className="app-logo-container">
                    <div className="app-logo-content">
                        {/* <img src={logo} className="app-logo" alt="logo" /> */}
                        <span className="app-title">尽情享受</span>
                    </div>
                </div>
                <div className="app-menu-container">
                    <ul className="mdui-list">
                        <div className="mdui-divider"></div>
                        <div className="add_border">

                            <li className="mdui-list-item mdui-ripple">
                                <Link to="/photo">
                                    <i className="mdui-list-item-icon mdui-icon material-icons">assistant</i>
                                    <div className="mdui-list-item-content">智能助理</div>
                                </Link>
                            </li>
                            <li className="mdui-list-item mdui-ripple">
                                <i className="mdui-list-item-icon mdui-icon material-icons">photo</i>
                                <div className="mdui-list-item-content">相片</div>
                            </li>
                            <li className="mdui-list-item mdui-ripple">
                                <i className="mdui-list-item-icon mdui-icon material-icons">photo_library</i>
                                <div className="mdui-list-item-content">相册</div>
                            </li>
                            <li className="mdui-list-item mdui-ripple">
                                <i className="mdui-list-item-icon mdui-icon material-icons">supervisor_account</i>
                                <div className="mdui-list-item-content">分享</div>
                            </li>
                        </div>
                        <div className="mdui-divider"></div>
                        <div className="add_border">
                            <li className="mdui-list-item mdui-ripple">
                                <i className="mdui-list-item-icon mdui-icon material-icons">archive</i>
                                <div className="mdui-list-item-content">归档</div>
                            </li>
                            <li className="mdui-list-item mdui-ripple">
                                <i className="mdui-list-item-icon mdui-icon material-icons">delete</i>
                                <div className="mdui-list-item-content">回收站</div>
                            </li>
                        </div>
                        <div className="mdui-divider"></div>
                        <div className="add_border">
                            <li className="mdui-list-item mdui-ripple">
                                <i className="mdui-list-item-icon mdui-icon material-icons">person_add</i>
                                <div className="mdui-list-item-content">添加家长账号</div>
                            </li>
                        </div>
                        <div className="mdui-divider"></div>
                        <div className="add_border">
                            <li className="mdui-list-item mdui-ripple">
                                <i className="mdui-list-item-icon mdui-icon material-icons">settings_applications</i>
                                <div className="mdui-list-item-content">设置</div>
                            </li>
                            <li className="mdui-list-item mdui-ripple">
                                <i className="mdui-list-item-icon mdui-icon material-icons">feedback</i>
                                <div className="mdui-list-item-content">反馈意见</div>
                            </li>
                            <li className="mdui-list-item mdui-ripple">
                                <i className="mdui-list-item-icon mdui-icon material-icons">help</i>
                                <div className="mdui-list-item-content">帮助</div>
                            </li>
                            <li className="mdui-list-item mdui-ripple">
                                <i className="mdui-list-item-icon mdui-icon material-icons">cloud_download</i>
                                <div className="mdui-list-item-content">应用下载</div>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="app-copyright">
                    <a href="">隐私权</a>
                    &nbsp;·&nbsp;
                    <a href="">条款</a>
                </div>
            </div >
        );
    }
}
export default AsideNav;
