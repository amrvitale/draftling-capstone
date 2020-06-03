import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
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

                <section className="faq">
                    <h2>Frequently Asked Questions</h2>
                </section>
            </div>
        );
    }
}

export default About;