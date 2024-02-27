import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav>
            <Link to="/">Website</Link>
            <ul>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar