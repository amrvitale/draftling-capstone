import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import { Link } from 'react-router-dom'

export default class Draftling extends React.Component {
    static defaultProps = {
        onDeleteDraftling: () => {}, 
    }
    static contextType = ApiContext;

    handleClickDelete = e => {
        e.preventDefault()
        const draftling_id = this.props.match.params.slug
        
        fetch(`${config.API_ENDPOINT}/mydraftlings/${draftling_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })

        .then(res => {
            if(!res.ok)
                return res.status
        })

        .then( () => {
            this.context.deleteDraftling(draftling_id)
            this.props.onDeleteDraftling(draftling_id)
        })

        .catch(error => {
            console.log({error})
        })
    }
    render() {
        const { title, id, content, wordcount, modified} = this.props

        const date = new Date(modified);

        return (
            <div className="draftling">
                <h2 className="draftling-title">
                    <Link to={`/draftling/${id}`}>
                    </Link>
                </h2>
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