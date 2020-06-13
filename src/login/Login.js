import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                 <section className="returningLogin">
                    <h1>Draftling</h1>  
                    <h2>A Community of Helpful & Friendly Writers</h2>
                    <h2>Returning Users - Login</h2>
                    <p>We're so glad to have you back! C'mon in and read, write, and edit with us!</p>
                    <div className="userEmail">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email-login" id="email-login"></input>
                    </div>

                    <div className="userPass">  
                        <label htmlFor="password">Password:</label>
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

export default Login;