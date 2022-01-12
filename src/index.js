import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css'
//import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Header } from './components';


const App = () => {
    return (
    <>
    <Router>
        <Header/>
    </Router>
    <div className='background'>
        "If you desire one thing for so long, it's a given that you'll miss other things along the way. That's how it is... that's life." -Godo
    </div>
    </>
    )
}
ReactDOM.render(<App />, document.getElementById('app'));