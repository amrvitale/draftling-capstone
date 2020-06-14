  
import React from 'react';
import { Link } from 'react-router-dom';
import Read from '../read/Read';
import Draftling from '../draftling/Draftling';

class MyDraftlings extends React.Component {
    render() {

        console.log(this.props.draftlings);

        return (
            <div className="mydraftlings">
                <h1>My Draftlings</h1>
                <section className="draftling1">
                    <ul>
                        {this.props.draftlings.map(draftling =>
                            <li key={draftling.id}>
                                <Draftling
                                    id={draftling.id}
                                    title={draftling.title}
                                    modified={draftling.modified}
                                    />
                            </li>
                            )}
                    
                    <Link to="./read">
                        <button type="button">Read</button>
                    </Link>

                    <Link to="./edit">
                        <button type="button">Edit</button>
                    </Link>
                    <button type="button">Delete</button>
                    </ul>
                </section>

             


            </div>
        );
    }
}

export default MyDraftlings;
