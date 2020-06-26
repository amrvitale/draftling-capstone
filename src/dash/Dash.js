import React from 'react';
import './Dash.css';
import { Link } from 'react-router-dom';
import PostDraftling from '../postDraftling/PostDraftling';
 

class Dash extends React.Component {
    render() {
        return (
            <div className="draftlingDash">
                <h1 className="myPage">My Draftlings Desk</h1>
                <br />
                <br />
                <Link to='/postdraftling'>
                    <button type="submit" className="postNew">Post New Draftling</button>
                </Link>

                <br/>
                <br/>

                <Link to='/mydraftlings'>
                    <button type="submit" className="viewMyDraftlings">View My Draftlings</button>
                </Link>
            </div>
        );
    }
}
export default Dash;