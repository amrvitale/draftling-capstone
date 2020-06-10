import React from 'react';
import SearchResults from '../searchResults/SearchResults'
import Read from '../read/Read';
import './CritiqueTemplate.css'

class CritiqueTemplate extends React.Component {
    render() {
        return (
            <div className="freeform">
                <section className="comments">
                    <h2>Complete a Critique Questionnaire</h2>
                    <p>Please remember to be objective, especially if the piece you're critiquing is not in a style or genre that you prefer. Always start with the strengths of the piece, then make solid suggestions for improvement.</p>
                    <h2>Opening Comments</h2>
                    <br />
                    <textarea>
                        
                    </textarea>

                    <h2>Plot</h2>
                    <p>How would you improve the believabilty of the plot? How would you make the plot easier to follow? How would you change the arc to leave you more satisfied at its resolution? If you have no improvements, leave this blank.</p>
                    <br />
                    <textarea>
                    </textarea>

                    <h2>Pacing</h2>
                    <p>How would you improve the pacing of this work? If you felt bored or rushed, how would you improve those parts? If you have no improvements, leave this blank.</p>
                    <br />
                    <textarea>
                    </textarea>

                    <h2>Description</h2>
                    <p>How would you improve the descriptions to make them more vivid? How would you improve the appropriateness of the vocabulary? If you have no improvements, leave this blank.</p>
                    <br />
                    <textarea>
                    </textarea>

                    <h2>Point of View</h2>
                    <p>How would you fix any serious point of view issues in this work? If there was confusion in the point of view, how would you improve that? If the point of view changed, is there any way that you could make the change smoother? If you have no improvements, leave this blank.</p>
                    <br />
                    <textarea>
                    </textarea>
                    
                    <h2>Characters</h2>
                    <p>How would you make the characters seem more real? How would you make them form more powerful connections with the reader? If you have no improvements, leave this blank.</p>
                    <br />
                    <textarea>
                    </textarea>

                    <h2>Dialog</h2>
                    <p>How would you improve the naturalness and believability of the dialog? What would you do to make each character's dialog more consistent with their characterization? How would you improve the amount of dialog in the work? If you have no improvements, leave this blank.</p>
                    <br />
                    <textarea>
                    </textarea>

                    <h2>Grammar and Spelling</h2>
                    <p>What serious grammar and spelling issues did you find? How would you improve the overall grammar in this work? If you have no improvements, leave this blank.</p>
                    <br />
                    <textarea>
                    </textarea>

                    <h2>Closing Comments</h2>
                    <p>Is there anything that you'd like to say in conclusion?</p>
                    <br />
                    <textarea>
                    </textarea>

                    <br/>
                    <input type="submit" value="Post Critique"></input>
                </section>
            </div>
        );
    }
}

export default CritiqueTemplate;