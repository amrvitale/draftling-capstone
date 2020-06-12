import React from 'react';
import { Link } from 'react-router-dom';
import Read from '../read/Read';

class MyDraftlings extends React.Component {
    render() {
        return (
            <div className="draftling1">
                <h1>My Draftlings</h1>
                
                <section class="draftling1">
                    <h2>Draftling Title 1</h2>
                    <p>Sentence preview...</p>
                    <Link to="./read">
                        <button type="button">Read</button>
                    </Link>

                    <Link to="./edit">
                        <button type="button">Edit</button>
                    </Link>
                    <button type="button">Delete</button>
                </section>

                <section class="draftling2">
                    <h2>Draftling Title 2</h2>
                    <p>Sentence preview...</p>
                    <Link to="./read">
                        <button type="button">Read</button>
                    </Link>

                    <Link to="./edit">
                        <button type="button">Edit</button>
                    </Link>
                    
                    <button type="button">Delete</button>
                </section>

            </div>
        );
    }
}

export default MyDraftlings;