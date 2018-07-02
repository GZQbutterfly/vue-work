import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';




import Demo from '../demo/demo';
import Home from '../home/home';

class AppRouter extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Router>
                <div className="app-wrap">
                    <Route path="/" component={Home} />
                    <Route path="/demo" component={Demo} />
                </div>
            </Router>
        );
    }
}


export default AppRouter;