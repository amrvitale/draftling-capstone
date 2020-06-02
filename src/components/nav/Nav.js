import React, { Component } from 'react';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul id="navbar">
                    <li><a href="#">My Dashboard</a></li>
                    <li><a href="#">Search Other Writer's Draftlings</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>

        );
    }
}
export default Nav;