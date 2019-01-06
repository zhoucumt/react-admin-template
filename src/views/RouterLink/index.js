import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./style.less";

class RouterLink extends Component {
    render() {
        return (
            <div className="silder">
                <div className="silder-children">
                    <div className="logo">
                        <a href="/">
                            <h1 className="app-name">xxxx项目管理系统</h1>
                        </a>
                    </div>

                    <ul className="menu">
                        <li className="menu-item">
                            <div className="meun-item-title">
                                <Link to="/">首页</Link>
                            </div>
                        </li>
                        <li className="menu-item">
                            <div className="meun-item-title">
                                <Link to="/about">关于</Link>
                            </div>
                        </li>
                        <li className="menu-item">
                            <div className="meun-item-title">
                                <Link to="/topics">主题列表</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RouterLink;
