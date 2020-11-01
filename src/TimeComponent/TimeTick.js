import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function TimeTick(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}


export default TimeTick;

