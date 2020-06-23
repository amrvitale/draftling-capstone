import React from 'react';
import './Dash.css';
import { Link } from 'react-router-dom';
import PostDraftling from '../postDraftling/PostDraftling';
 

class Dash extends React.Component {
    render() {
        return (
            <div className="draftlingDash">
                <h1>My Draftling Dashboard</h1>
                <br />
                <br />
                <Link to='/postdraftling'>
                    <button type="submit">Post New Draftling</button>
                </Link>

                <br/>
                <br/>

                <Link to='/mydraftlings'>
                    <button type="submit">View My Draftlings</button>
                </Link>
            </div>
        );
    }
}
export default Dash;