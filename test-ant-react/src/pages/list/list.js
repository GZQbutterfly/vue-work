import React, { Component } from 'react';
import ReactDoM from 'react-dom';


import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll';
import { PullToRefresh, Button } from 'antd-mobile';


function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
        dataArr.push(i);
    }
    return dataArr;
}

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
        };

        console.log(props, this.props);
    }
    componentDidMount() {
        const hei = this.state.height - 0;
        console.log(this, ReactDoM.findDOMNode(this.ptr));
        setTimeout(() => this.setState({
            height: hei,
            data: genData(),
        }), 0);
    }

    render() {
        var i = 0, len = 20, listOfLi = [];

        for (i; i < len; i++) {
            listOfLi.push(<li key={i}>Row {i + 1}</li>)
        }

        return (
            <div style={{
                height: 'calc( 100% - 50px )'
            }}>
                <h1>Example of scrollable list</h1>
                <ReactIScroll iScroll={iScroll}
                    options={this.props.options}
                    onScrollStart={this.onScrollStart}>
                    <ul>
                        {listOfLi}
                    </ul>
                </ReactIScroll>
            </div >
        );
    }

    onScrollStart() {
        console.log("iScroll starts scrolling")
    }
}


List.defaultProps = {
    options: {
        mouseWheel: true,
        scrollbars: true,
        freeScroll: true,
        invertWheelDirection: true,
        momentum: false,
        // indicators: {}
    }
};


export default List;