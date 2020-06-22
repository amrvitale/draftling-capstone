import React from 'react';
import Read from '../read/Read';
import './CritiqueFreeform.css'

class CritiqueFreeform extends React.Component {
    render() {
        return (
            <div className="freeform">
                <section className="comments">
                    <h2>Post a Freeform Critique</h2>
                    <p>Please remember to be objective, especially if the piece you're critiquing is not in a style or genre that you prefer. Always start with the strengths of the piece, then make solid suggestions for improvement.</p>
                    <h2>Opening Comments</h2>
                    <textarea>
                        
                    </textarea>

                    <h2>Freeform Critique</h2>
                    <textarea>
                        
                    </textarea>

                    <br/>
                    <input type="submit" value="Post Critique"></input>
                </section>
            </div>
        );
    }
}

export default CritiqueFreeform;