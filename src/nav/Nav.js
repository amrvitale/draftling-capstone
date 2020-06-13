import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul id="navbar">
                    <li><Link to='/mydash'>My Dashboard</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/search'>Search Other Writer's Draftlings</Link></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>

        );
    }
}
export default Nav;