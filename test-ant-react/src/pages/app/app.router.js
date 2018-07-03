import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';




import Demo from '../demo/demo';
import Home from '../home/home';

class AppRouter extends Component {
    constructor() {
        super();
        // 
    }
    render() {
        return (
            <Router>
                <div className="app-wrap">
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <Route path="/home" component={Home} />
                    <Route exact path="/demo" component={Demo} />
                    <Route path="*" component={NoMatch} />
                </div>
            </Router>
        );
    }
}

function NoMatch() {
    return (<div>Not Found Page.</div>)
}


export default AppRouter;