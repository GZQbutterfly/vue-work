import React, { Component } from 'react';
import ReactDoM from 'react-dom';




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

    }

    render() {
        var i = 0, len = 20, listOfLi = [];

        for (i; i < len; i++) {
            listOfLi.push(<li key={i}>Row {i + 1}</li>)
        }

        return (
            <div>
                <h1>Example of scrollable list</h1>
                <ul>
                    {listOfLi}
                </ul>
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