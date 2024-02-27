import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <>
        <nav>
            <Link to="/" className="title">Website</Link> 
            <ul >
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar