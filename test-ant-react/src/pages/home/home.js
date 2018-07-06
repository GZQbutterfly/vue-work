
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, NavLink as Link } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import {MD5, AES} from "crypto-js";

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
        // console.log('render 前执行  构造函数  ');
        // this.checkPath();
    }
    render() {
        return (
            <Router>
                <div className="home-container">
                    <div className="home-content">
                        <Route exact path="/home" component={Demo} />
                        <Route exact path="/home/about" component={List} />
                        <Route exact path="/home/topics" render={() => <Demo dataObj={{ name: 45 }} onClick={this.btnClick} />} />
                    </div>
                    <div className="home-navbar">
                        <ul>
                            <li><Link exact to={{ "pathname": "/home", state: { id: 343 } }} activeStyle={{ color: '#4dc060' }} >Home</Link></li>
                            <li><Link exact to="/home/about" activeClassName="home-active-navbar other-active" >About</Link></li>
                            <li><Link exact to="/home/topics" activeClassName="home-active-navbar">Topics</Link></li>
                        </ul>
                    </div>
                </div>
            </Router>
        );
    }
    componentDidMount() {
        // console.log('render 后执行  可获取对应的dom')
        let aes = AES;
        let md5 = MD5;
        let codeKey = '123123';
        let userKey = '_user';
        let userVal = { id: 3443, name: '张三' };
        let _userKey = md5(userKey);//aes.encrypt(userKey, codeKey).toString();
        console.log(_userKey);
        // 
        let _v = localStorage.getItem(_userKey);
        if (!_v) {
            _v = aes.encrypt(JSON.stringify(userVal), codeKey).toString();
            localStorage.setItem(_userKey, _v);
        }
        let _userVal = aes.decrypt(_v, codeKey).toString(CryptoJS.enc.Utf8);
        console.log(_userVal);
        // // Encrypt
        // var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
        // console.log(ciphertext.toString());
        // // Decrypt
        // var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
        // var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        // console.log(plaintext);
    }
    componentWillUnmount() {
        // console.log('shihsi')
    }
    handleClick(match, location) {
        return !!match;
    }
    btnClick(event) {
        console.log(event.target);

    }
}






export default Home;


