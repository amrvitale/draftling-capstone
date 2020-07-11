import React from 'react';
import Draftling from '../draftling/Draftling';
import './MyDraftlings.css'

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
