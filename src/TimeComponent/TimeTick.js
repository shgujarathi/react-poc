import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/*
function TimeTick(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}*/


class TimeTick extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        console.log(this.timerID)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return (
            <div>
                <h2>Hello, It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


export default TimeTick;

