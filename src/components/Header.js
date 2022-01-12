import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const Header = () => {
    return (
        <>  
        <div className="header">
            <div className="websiteName">김성훈</div>
            <nav className="directory">
                <ul>
                    <Link to="/home" className="link">
                        <li className="navBtn">Home</li>
                    </Link>
                    <Link to="/home" className="link">
                        <li className="navBtn">About Me</li>
                    </Link>
                    <Link to="/home" className="link">
                        <li className="navBtn">Projects</li>
                    </Link>
                    <Link to="/home" className="link">
                        <li className="navBtn">Contact</li>
                    </Link>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Header;