import React from 'react';
import './Dash.css';
import { Link } from 'react-router-dom';
 

class Dash extends React.Component {
    render() {
        return (
            <div className="draftlingDeskPage">
                <div className="deskHero">
                    <h1 className="myDesk">My Draftlings Desk</h1>
                    <br />
                    <br />
                </div>
                    <br />
                    <br />
                    <br />
                    <h2 className="start">Let's get started!</h2>
                    <p>Welcome to your desk, your own personal workspace at Draftling. <br />Here you can create a brand new draftling, or view your existing draftlings to edit or publish to the Draftling database.</p>
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