
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, NavLink as Link } from 'react-router-dom';

import Demo from '../demo/demo';

import './home.scss';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
            minHeight: window.innerHeight
        };
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <Router>
                <div className="home-container" style={{ 'minHeight': this.state.minHeight + 'px' }}>
                    <div className="home-content">
                        <Route exact path="/" component={Demo} />
                        <Route path="/about" component={Demo} />
                        <Route path="/topics" component={Demo} />
                    </div>
                    <div className="home-navbar">
                        <ul>
                            <li><Link to="/" activeClassName="home-active-navbar">Home</Link></li>
                            <li><Link to="/about" activeClassName="home-active-navbar">About</Link></li>
                            <li><Link to="/topics" activeClassName="home-active-navbar">Topics</Link></li>
                        </ul>
                    </div>
                </div>
            </Router>
        );
    }
    handleClick(match, location) {
        console.log(match, location, this);
        return true;
    }
}

export default Home;


