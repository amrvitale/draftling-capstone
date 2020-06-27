import React from 'react';
import './About.css'

class About extends React.Component {
    render() {
        return (
            <div className="aboutDetails">
                <div className="aboutHero">
                    <h2 className="aboutHeader">About Draftling</h2>
                </div>
                    <p>Draftling is a forum for getting and giving feedback on your fiction writing. Post your writing and receive indepth feedback from fellow writers and editors! We accept the following types of fiction pieces: </p>
                    <ul>
                       <li>Microfiction</li>
                        <li>Flash Fiction</li>
                        <li>Short Story</li>
                        <li>Novellete</li>
                        <li>Novella</li>
                        <li>Novel</li>
                    </ul>
                
                    <h2>Feedback Options</h2>
                    <p>Beta readers can provide feedback via comments or questionnaires.  To get feedback on your piece, set your feedback availability to one of these options, and readers will post their clear, concise, and useful feedback to help you improve your writing!</p>
            </div>
        );
    }
}

export default About;