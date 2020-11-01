import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import {Routes} from "./route";


ReactDOM.render(
    <Router>
        <App></App>
        <Routes/>
    </Router>
    ,
    document.getElementById('root')
)
;
/*    <React.StrictMode>
        <Game />
    </React.StrictMode>,
    document.getElementById('root')*/

