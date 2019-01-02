import React, { Component } from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters }) => { // props agrument will be added at run-time by React
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};


export default NavBar;