import React from 'react';
import { Link } from 'react-router-dom';
import Read from '../read/Read';
import Draftling from '../draftling/Draftling';
import DraftlingPage from '../draftlingpage/DraftlingPage';
import './MyDraftlings.css'

class MyDraftlings extends React.Component {
    render() {
        console.log(this.props.draftlings);
        return (
          <div className="myDraftlingsPage">
                <h1>My Draftlings</h1>
                    <br />
                        <ul className="container">
                                {this.props.draftlings.map(draftling =>
                                    <li className="card" key={draftling.id}>
                                        <Draftling
                                            id={draftling.id}
                                            title={draftling.title}
                                            wordcount={draftling.wordcount}
                                            genre={draftling.genre}
                                            content={draftling.content}
                                            modified={draftling.modified}
                                        />
                                    </li>
                                )} 
                        </ul>
            </div>
    )};
}
    

export default MyDraftlings;
