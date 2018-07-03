
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
        let match = this.props.match;
        return (
            <Router>
                <div className="home-container" style={{ 'minHeight': this.state.minHeight + 'px' }}>
                    <div className="home-content">
                        <Route exact path="/home" component={Demo} />
                        <Route path={`${match.url}/about`} component={Demo} />
                        <Route path={`${match.url}/topics`} component={Demo} />
                    </div>
                    <div className="home-navbar">
                        <ul>
                            <li><Link exact to="/home">Home</Link></li>
                            <li><Link exact to={`${match.url}/about`}>About</Link></li>
                            <li><Link exact to={`${match.url}/topics`}>Topics</Link></li>
                        </ul>
                    </div>
                </div>
            </Router>
        );
    }
    componentWillMount() {
        console.log(1111, this.props.history)
    }
    componentDidMount() {
        console.log(3333)
    }
    handleClick(match, location) {
        console.log(arguments);
        return true;
    }
}






export default Home;


