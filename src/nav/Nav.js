import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul id="navbar">
                    <li><Link to='/mydash'>MY DESK</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to='/search'>SEARCH DRAFTLINGS</Link></li>
                </ul>
            </div>

        );
    }
}
export default Nav;