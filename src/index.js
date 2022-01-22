import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css'
import { Header, HomePage, AboutMe, Projects, Contact } from './components';


const App = () => {
    return (
    <>
    <div className='background'>
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
        
    </div>
    </>
    )
}
ReactDOM.render(<App />, document.getElementById('app'));