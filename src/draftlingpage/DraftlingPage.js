import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import Draftling from '../draftling/Draftling';
import {findDraftling} from '../draftlings-helpers'
import {getCritiquesForDraftlings} from '../draftlings-helpers'
import { Link } from 'react-router-dom'
import Edit from '../edit/Edit'
import './DraftlingPage.css'
import Unpublish from '../unpublish/Unpublish'
import Publish from '../publish/Publish'
import CritiqueFreeform from '../critiquefreeform/CritiqueFreeform'
import CritiqueTemplate from '../critiquetemplate/CritiqueTemplate'
import Critique from '../critiques/Critique'

class DraftlingPage extends React.Component {
  static defaultProps = {
      match: {
        params: {}
      }
    }
    componentDidMount() {
    this.context.fetchTemplateCritiques();
    this.context.fetchFreeformCritiques();
  }
  
  static contextType = ApiContext   

    updateDraftlingStatus = (selectedDraftling) =>  {
    console.log('clicked')
    console.log(this.props)

    let status 
      
    if (selectedDraftling.status === 'published') {
      status = 'unpublished'
    } else {
      status = 'published'
    }  

    const updatedDraftling = {
      ...selectedDraftling,
      status: status
    }

    let url = `${config.API_ENDPOINT}/mydraftlings/${selectedDraftling.id}`; 

      fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },   
        body: JSON.stringify(updatedDraftling),
    }) 

    .then(draftling => {
      console.log(draftling)
      this.props.handlePublishDraftling(selectedDraftling.id, status);
    })

    .catch(error => {
      console.log({ error })
    })
  }

  render() {
      const {draftlings = [] } = this.context
      const {slug} = this.props.match.params;
      console.log(slug)
      console.log(draftlings)
      let selectedDraftling = draftlings.find(draftling => draftling.id === parseInt(slug))
      console.log(draftlings, selectedDraftling)
      console.log(selectedDraftling)

      let statusButton;


      if (selectedDraftling === undefined ) {
       let html = <p>Readying your draftling!</p>
      }
      else if (selectedDraftling.status=== "published") {
        statusButton = <button className="unpubButton" onClick = {()=>this.updateDraftlingStatus(selectedDraftling)}>Unpublish</button>
      }
      else {
        statusButton = <button className="pubButton"onClick = {()=>this.updateDraftlingStatus(selectedDraftling)} >Publish</button>
      }
     
      const crits = getCritiquesForDraftlings(draftling_id)

      return (
          <div className="draftlingPage">
            <div className="myDraftActions">
             <Link to={`/edit/${slug}`}>
                <button type="button">Edit</button>
              </Link> 
            
              {statusButton}

              <button type="button">Delete</button>

              <Link to={`/postfreeformcritique/${slug}`}>
                <button type="button">Post a Freeform Critique</button>
              </Link>

              <Link to={`/posttemplatecritique/${slug}`}>
                <button type="button">Post a Templated Critique</button>
              </Link>

            </div>

            <div className="draftViewOfSelected">
              <h1 className="draftlingTitle"> {(selectedDraftling) ? selectedDraftling.title: ""}</h1> 
                <br />
              <p className="wordcountAndGenre"> {(selectedDraftling) ? selectedDraftling.wordcount: ""}, {(selectedDraftling) ? selectedDraftling.genre: ""}</p> 
                <br />
              <p>{(selectedDraftling) ? selectedDraftling.content: ""}</p>
            </div>

            <div className="critiques">
              
              <h2>Critiques, if any posted, will appear below.</h2>
              
              {crits.map(freeformCrit =>
              <Critique 
                opening={freeformCrit.opening}
                critfreeform={freeformCrit.critfreeform}
              />
              )}
            
            </div>
          </div>
      );
  }
}
export default DraftlingPage;