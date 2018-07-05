
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, NavLink as Link } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Demo from '../demo/demo';
import List from '../list/list';

import './home.scss';


let history = createBrowserHistory();

history.listen(function () {
    console.log(4543543);
})

class Home extends Component {
    constructor() {
        super();
        this.state = {
            minHeight: window.innerHeight
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
        console.log('render 前执行  构造函数  ');
        // this.checkPath();
    }
    render() {
        return (
            <Router>
                <div className="home-container" style={{ 'minHeight': this.state.minHeight + 'px' }}>
                    <div className="home-content">
                        <Route exact path="/home" component={Demo} />
                        <Route exact path="/home/about" component={List} />
                        <Route exact path="/home/topics" render={() => <Demo dataObj={{ name: 45 }} />} />
                    </div>
                    <div className="home-navbar">
                        <ul>
                            <li><Link exact to="/home" activeStyle={{ color: '#4dc060' }} >Home</Link></li>
                            <li><Link exact to="/home/about" activeClassName="home-active-navbar other-active" isActive={this.handleClick}>About</Link></li>
                            <li><Link exact to="/home/topics" activeClassName="home-active-navbar" isActive={this.handleClick}>Topics</Link></li>
                        </ul>
                    </div>
                </div>
            </Router>
        );
    }
    componentDidMount() {
        console.log('render 后执行  可获取对应的dom')
    }
    componentWillUnmount() {
        console.log('shihsi')
    }
    handleClick(match, location) {
        return !!match;
    }
}






export default Home;


