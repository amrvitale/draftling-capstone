import React from 'react';
import { Link } from 'react-router-dom';
import Read from '../read/Read';
import Draftling from '../draftling/Draftling';
import DraftlingPage from '../draftlingpage/DraftlingPage';

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
                                    wordcount={draftling.wordcount}
                                    content={draftling.content}
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

/* //this is the code that currently works
 <Link to={`/draftling/${draftling.id}`}>
                                    <p>
                                        title={draftling.title}
                                        <br />
                                        wordcount={draftling.wordcount}
                                        
                                        modified={draftling.modified}
                                    </p>
                                </Link>*/