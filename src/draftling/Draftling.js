import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import { Link } from 'react-router-dom'
import './Draftling.css'

export default class Draftling extends React.Component {
    
    static contextType = ApiContext;

  
    render() {
        const { title, id, content, wordcount, genre, modified} = this.props

        const date = new Date(modified);

        return (
                <div className="container">
                    <div className="cards">
                        <Link to={`/draftling/${id}`}>
                            <a className="card">  
                                <span className="card-header">
                                    <span className="card-title">
                                        <h2>{title}</h2> 
                                    </span>
                                </span>
                                <span className="card-summary">
                                    {wordcount},
                                    <br />
                                    {genre}
                                    <br />
                                </span>
                                <span className="card-meta">Created: {date.toDateString()}</span>
                            </a>
                        </Link>
                    </div>
                </div>
        )
    }
}
//on each individual draftling (not owned by logged in user), these are the options:
// - Read
// - Post Critique (freeform type and template type)
//you get here by searching in search for other user's draftlings and clicking an individual draftling

//on logged in user's draftlings, these are the options:
// - Read
// - Edit
// - Delete
//you get here by searching in search for your own draftlings or by going to dash --> My draftlings

//thinking draftling.js should have all associated actions ? or will that make it so all people can
//delete all draftlings?
//or only on my draftlings should delete function go?

//draftling.js --> actions for post critique and view
//mydraftlings.js --> click link to draftling so it will be draftlingid in url --> all asosciation "my" actions
//ie. view, edit, delete, read crit