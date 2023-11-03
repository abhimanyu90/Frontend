import React from 'react';
import { Link } from 'react-router-dom';
import logo from './b.jpg'; // Import your logo image
import './Nav.css' ;
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning text-dark">
            <Link to="/" className='navbar-brand mx-3 '>
                <img src={logo} alt='Logo' className='logo' /><b> Recipe Book</b>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/upload-recipe" className='nav-link button-62 ' role='button'>Upload Recipe</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/recipe-list" className='nav-link button-62'>Recipe List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
