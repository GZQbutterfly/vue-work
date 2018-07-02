import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './app.router';

import 'antd-mobile/dist/antd-mobile.css';

import './app.scss';

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="app-container">
                <AppRouter/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

