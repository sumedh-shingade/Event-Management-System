import { Link, NavLink, Outlet } from "react-router-dom";
// import './css/Header.css'
import React from 'react';
import Person from './images/person.svg'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">4S-Events</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            {/* <a class="nav-link" href="#">Login</a> */}
                            <Link to="/aboutus" className="nav-link">About Us</Link>
                        </li>

                        <li class="nav-item dropdown">
                        <Link to="/service" className="nav-link">Services</Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Weddings</a></li>
                                <li><a class="dropdown-item" href="#">Birthday Parties</a></li>
                                {/* <li><hr class="dropdown-divider" /></li> */}
                                <li><a class="dropdown-item" href="#">Corporate Events</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            {/* <a class="nav-link" href="#">Login</a> */}
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>

                        <li class="nav-item">
                            {/* <a class="nav-link" href="#">Login</a> */}
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>

                       
                       
                        {/* <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <button type="button" class="btn btn-light">Profile</button>                
                </div>
            </div>
        </nav>
    )
}

export default Header;