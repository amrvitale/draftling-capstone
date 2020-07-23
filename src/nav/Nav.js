import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
/* Nav component, available throughout app */
class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul id="navbar">
                    <li><Link to='/mydesk'>MY DESK</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to='/search'>SEARCH</Link></li>
                </ul>
            </div>

        );
    }
}
export default Nav;