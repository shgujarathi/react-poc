import React, {Component} from 'react';

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
        // this.state.date = new Date() -> THIS IS WRONG BY DOING THIS IT WILL NOT RE RENDER THE PAGE
        this.setState({date: new Date()}) // THIS IS CORRECT ALWAYS USE THIS.SETSTATE
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

