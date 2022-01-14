import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css'
//import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Header, HomePage } from './components';


const App = () => {
    return (
    <>
    <Router>
        <Header/>
    </Router>
    <div className='background'>

        <Router>
            <HomePage/>
        </Router>
    </div>
    </>
    )
}
ReactDOM.render(<App />, document.getElementById('app'));