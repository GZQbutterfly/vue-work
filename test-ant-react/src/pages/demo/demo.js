import React, { Component } from 'react';


import { Button } from 'antd-mobile';



class Demo extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        // console.log(this.props);
        return (
            <div className="demo-container">
                <Button onClick={this.handleClick}>Start </Button>
            </div>
        );
    }
    componentDidMount(){
        let _props = this.props;
        // console.log(_props);
    }
    handleClick(event) {
        this.props.onClick(event);
        // this.props.history.push('/demo', {asda:'34'});
    }
}

export default Demo;


