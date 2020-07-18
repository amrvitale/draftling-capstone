import React from 'react';
import './Welcome.css'

class Welcome extends React.Component {
    render() {
        return (
            <div className="aboutDetails">
                <div className="welcomeHero">
                    <h2 className="aboutHeader">Welcome to Draftling</h2>
                </div>
                    <p className="aboutPara">Draftling is a forum for getting and giving feedback on your fiction writing. Post your writing and receive indepth feedback from fellow writers and editors! We accept the following types of fiction pieces: </p>
                   <br/>
                    <ul className="fictionLengths">
                       <li>Microfiction</li>
                        <li>Flash Fiction</li>
                        <li>Short Story</li>
                        <li>Novellete</li>
                        <li>Novella</li>
                        <li>Novel</li>
                    </ul>
                   
                    <br /> <br />  <br />
                    <h2 className="feedbackOptions">Feedback Options</h2>
                    <p className="aboutPara">Beta readers can provide feedback via comments or questionnaires.  To give feedback on a piece, click the Draftling and select one of these options. The best readers post clear, concise, and useful feedback to help you improve your writing!</p>
                </div>
       
        );
    }
}

export default Welcome;