import React from 'react';
import { Link } from 'react-router-dom';

class MyDraftlings extends React.Component {
    render() {
        return (
            <div className="draftling1">
                <h1>My Draftlings</h1>
                
                <section class="draftling1">
                    <h2>Draftling Title 1</h2>
                    <p>Sentence preview...</p>
                    <button type="button">Read</button>
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                </section>

                <section class="draftling2">
                    <h2>Draftling Title 2</h2>
                    <p>Sentence preview...</p>
                    <button type="button">Read</button>
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                </section>

            </div>
        );
    }
}

export default MyDraftlings;