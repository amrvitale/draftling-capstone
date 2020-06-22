import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import Draftling from '../draftling/Draftling';
import {findDraftling} from '../draftlings-helpers'
import { Link } from 'react-router-dom'
import Edit from '../edit/Edit'

class DraftlingPage extends React.Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
      static contextType = ApiContext    
   
    
        

    render() {
        const {draftlings = [] } = this.context
        const {slug} = this.props.match.params
        console.log(slug)
        let selectedDraftling = draftlings.find(draftling => draftling.id === parseInt(slug))
        console.log(draftlings, selectedDraftling)
        console.log(selectedDraftling)


        return (
            <div>
              <section className="myDraftActions">
               <Link to={`/edit/${slug}`}>
                  <button type="button">Edit</button>
                </Link> 
                <button type="button">Publish</button>
                <button type="button">Delete</button>
              </section>
              <section className="draftViewOfSelected">
                <h1 className="draftlingTitle"> {(selectedDraftling) ? selectedDraftling.title: ""}</h1> 
                  <br />
                <p>Length Type: {(selectedDraftling) ? selectedDraftling.wordcount: ""}</p> 
                  <br />
                  <p>{(selectedDraftling) ? selectedDraftling.genre: ""}</p>
                  <br />
                <p>{(selectedDraftling) ? selectedDraftling.content: ""}</p>
              </section>

              
            </div>
        );
    }
}

export default DraftlingPage;