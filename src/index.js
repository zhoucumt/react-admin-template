import React from 'react';
import ReactDOM from 'react-dom';
// import {ConnectedRouter} from "connected-react-router";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

serviceWorker.unregister();
