import React from 'react';
import './PostDraftling.css';

class PostDraftling extends React.Component {
    render() {
        const styleTextArea = {
            minHeight: '380px',
            minWidth: '380px',
            padding: '9px',
            boxSizing: 'border-box',
            fontSize: '15px',
            textAlign: 'left'
        };

        const styleTitle = {
            minWidth: '200px'
        }
        return (
            <div className="postDraftling">
                <h1>Post your Draftling below</h1>
                <form>
                    <label htmlFor="draftlingTitle">Draftling Title:</label>
                    <input type="text" style={styleTitle}></input>
                    <br />
                    <label htmlFor="wordCount">Choose an approximate word count.</label>
                    <select name="wordCount" id="wordCount">
                        <option></option>
                        <option value="sixWordStory">Six word story</option>
                        <option value="minisaga">Minisaga: 50 words</option>
                        <option value="microfiction">Microfiction: 51 - 100 words</option>
                        <option value="twitterature">Twitterature: 280 characters</option>
                        <option value="suddenFiction">Sudden Fiction: 300 - 750 words</option>
                        <option value="flashFiction">Flash Fiction: 751 - 1000 words</option>
                        <option value="shortStory">Short Story: 1001 - 7500 words</option>
                        <option value="novellete">Novellete: 7501 - 20,000 words</option>
                        <option value="novella">Novella: 20,001 - 60,000 words</option>
                        <option value="novel">Novel: 60,0001 + words</option>
                    </select>
                    <br />
                    <textarea style={styleTextArea}> </textarea>
                    <br/>
                    <input type="submit" value="Post Draftling"></input>
                </form>
            </div>
        )
    }
}

export default PostDraftling;