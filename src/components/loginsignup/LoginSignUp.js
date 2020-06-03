import React, {Component} from 'react';
import './LoginSignUp.css';

class LoginSignUp extends React.Component {
    render() {
        return (
            <div>
               <section className="welcome">
                    <h1>Welcome to Draftling, a Highly Productive Writing Community!</h1>
                    <p>Are you a writer who wants feedback?</p> 
                    <p>Are you an avid reader who enjoys providing feedback to aspriring authors?</p>
                    <p>Maybe you're an editor at heart, ready to mark up copy?</p>
                    <p>Then you're in the WRITE PLACE!</p>
               </section>
            
                <section className="aboutDetails">
                    <h2>About Draftling</h2>
                    <p>Draftling is a forum for getting and giving feedback on your fiction writing. Post your writing and receive indepth feedback from fellow writers and editors! We accept the following types of fiction pieces:
                        <ul>
                            <li>Microfiction</li>
                            <li>Flash Fiction</li>
                            <li>Short Story</li>
                            <li>Novellete</li>
                            <li>Novella</li>
                            <li>Novel</li>
                        </ul>
                    </p>
                </section>
                <section className="feedbackOptions">
                    <h2>Feedback Options</h2>
                    <p>Beta readers can provide feedback via comments or questionnaires.  To get feedback on your piece, set your feedback availability to one of these options, and readers will post their clear, concise, and useful feedback to help you improve your writing!</p>
                </section>

                <section className="signup">
                    <h2>Join the Draftling Community - Create an Account</h2>
                    <div className="firstName">
                        <label for="first-name">First Name:</label>
                        <input type="text" name="first-name" id="first-name"></input>
                    </div>

                    <div className="lastName">
                        <label for="last-name">Last Name:</label>
                        <input type="text" name="last-name" id="last-name"></input>
                    </div>

                    <div className="userEmail">
                        <label for="email">Email:</label>
                        <input type="text" name="email" id="email"></input>
                    </div>

                    <div className="userPass">  
                        <label for="password">Password:</label>
                        <input type="text" name="password" id="password"></input>
                    </div>
                    <div className="submitBtn">
                        <button type="submit">Sign Up</button>
                    </div>
                </section>

                <section className="returningLogin">
                    <h2>Returning Users - Login</h2>
                    <div className="userEmail">
                        <label for="email">Email:</label>
                        <input type="text" name="email-login" id="email-login"></input>
                    </div>

                    <div className="userPass">  
                        <label for="password">Password:</label>
                        <input type="text" name="password" id="password"></input>
                    </div>

                    <div className="submitBtn">
                        <button type="submit">Log In</button>
                    </div>
                </section>
            </div>

        );
    }
}
export default LoginSignUp;
