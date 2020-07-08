import React from 'react';
import { Link } from 'react-router-dom';
import Draftling from '../draftling/Draftling';
import DraftlingPage from '../draftlingpage/DraftlingPage';
import './MyDraftlings.css'
import background from './bookshelves.jpg'

class MyDraftlings extends React.Component {
    render() {
        console.log(this.props.draftlings);
        return (
          <div className="myDraftlingsPage">
              <div className="myDraftlingsPageHero"> 
                <h1 className="myDraftlingsHeading">My Draftlings Shelf</h1>
                </div>
                        <ul className="container">
                                {this.props.draftlings.map(draftling =>
                                    <li className="card" key={draftling.iddraft}>
                                        <Draftling
                                            iddraft={draftling.iddraft}
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
