import React, {Component} from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    render() {
        const loginStyle = {
            fontWeight: 'bold',
            fontSize: '25px',
        }
        return (
            <div>
               <section className="welcome">
                   <div className="welcomeHero">
                    <h1 className="welcomeHeader">Welcome to Draftling 
                    </h1>
                    <h2 className="tagline">A Highly Productive Writing Community</h2>
                    </div>
                    
                    <p>Are you a writer who wants feedback? Are you an avid reader who enjoys providing feedback to aspriring authors? Maybe you're an editor at heart, ready to mark up copy? Then you're in the WRITE PLACE </p>
                     
               </section>
            
                <section className="aboutDetails">
                    <h2>About Draftling</h2>
                    <p>Draftling is a forum for getting and giving feedback on your fiction writing. Post your writing and receive indepth feedback from fellow writers and editors! We accept the following types of fiction pieces: </p>
                    <ul>
                       <li>Microfiction</li>
                        <li>Flash Fiction</li>
                        <li>Short Story</li>
                        <li>Novellete</li>
                        <li>Novella</li>
                        <li>Novel</li>
                    </ul>
                </section>

                <section className="feedbackOptions">
                    <h2>Feedback Options</h2>
                    <p>Beta readers can provide feedback via comments or questionnaires.  To get feedback on your piece, set your feedback availability to one of these options, and readers will post their clear, concise, and useful feedback to help you improve your writing!</p>
                </section>

                <section className="signup">
                    <h2>Join the Draftling Community - Create an Account</h2>
                    <div className="firstName">
                        <label htmlFor="first-name">First Name:</label>
                        <input type="text" name="first-name" id="first-name"></input>
                    </div>

                    <div className="lastName">
                        <label htmlFor="last-name">Last Name:</label>
                        <input type="text" name="last-name" id="last-name"></input>
                    </div>

                    <div className="userEmail">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email"></input>
                    </div>

                    <div className="userPass">  
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password" id="password"></input>
                    </div>
                    <div className="submitBtn">
                        <button type="submit">Sign Up</button>
                    </div>
                    <Link to="./login">
                        <p style={loginStyle}>Already have an account? Login</p>
                    </Link>
                </section>
            </div>
        );
    }
}
export default Signup;
