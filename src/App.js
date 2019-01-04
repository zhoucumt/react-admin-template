import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {renderRoutes} from "react-router-config";
// 引入视图
import About from "./views/About/router";
import List from "./views/List/router";

import {DatePicker} from 'antd';

import logo from './logo.svg';
import './App.css';

// 合并路由
const routes = [...About, ...List];

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                            <i className="iconfont icon-clock"></i>
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer">
                            Learn React
                        </a>
                        <div className="layout">{renderRoutes(routes)}</div>
                    </header>
                    <DatePicker/>
                </div>
            </Router>
        );
    }
}

export default App;
