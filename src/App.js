import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {renderRoutes} from "react-router-config";
// 引入视图
import RouterLink from "./views/RouterLink";
import ContentRouter from "./views/Content/router";

import './App.less';

// 合并路由
const routes = [...ContentRouter];

class App extends Component {
    render() {
        return (
            <Router>
                <div className="screen">
                    <div className="slider-container">
                        <RouterLink />
                    </div>
                    <div className="layout">{renderRoutes(routes)}</div>
                </div>
            </Router>
        );
    }
}

export default App;
