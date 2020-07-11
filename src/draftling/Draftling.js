import React from 'react'
import ApiContext from '../ApiContext'
import { Link } from 'react-router-dom'
import './Draftling.css'

export default class Draftling extends React.Component {
    
    static contextType = ApiContext;

  
    render() {
        const { title, id, content, wordcount, genre, modified} = this.props

        const date = new Date(modified);

        return (
            <div className="individualCard">
                <Link to={`/draftling/${id}`}>  
                    <div className="card-header">
                        <div className="card-title">
                            <h2>{title}</h2> 
                        </div>
                    </div>
                    <div className="card-summary">
                        {wordcount},
                        <br />
                        {genre}
                        <br />
                    </div>
                    <div className="card-meta">Created: {date.toDateString()}</div>
                </Link>
            </div>
        )
    }
}


