import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import HeaderStyle from './../styles/HeaderStyle.css'

const Header = () => {
    return (
        <>  
        <div className="header">
        {/*<div className="websiteName">김성훈</div>*/}            
            <nav>
                <ul className="directory">
                    <Link to="/" className="link">
                        <li className="navBtn">Home</li>
                    </Link>
                    <Link to="/aboutme" className="link">
                        <li className="navBtn">About Me</li>
                    </Link>
                    <Link to="/projects" className="link">
                        <li className="navBtn">Projects</li>
                    </Link>
                    <Link to="/contact" className="link">
                        <li className="navBtn">Contact</li>
                    </Link>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Header;