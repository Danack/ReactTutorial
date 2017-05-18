//require('../sass/HelloForm.scss');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <p>The time is {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}
