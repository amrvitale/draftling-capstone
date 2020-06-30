import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import Draftling from '../draftling/Draftling';
import {findDraftling} from '../draftlings-helpers'
import { Link } from 'react-router-dom'
import Edit from '../edit/Edit'
import './DraftlingPage.css'
import Unpublish from '../unpublish/Unpublish'
import Publish from '../publish/Publish'

class DraftlingPage extends React.Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
      static contextType = ApiContext   
      
      updateDraftlingStatus = (id) =>  {
        console.log(id)
      console.log('clicked')
      console.log(this.props)
      let url = `${config.API_ENDPOINT}/${id}/update_status`;
        fetch(url, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },   
      }) 

      .then(draftling => {
        console.log(draftling)
        this.state.handlePublishDraftling();
      })

      .catch(error => {
        console.log({ error })
      })
    }
    deleteDraftling() {
      //delete apiData in front end
      //delete apiData in back end
      //make sure front end is changed, make sure data gets refreshed
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
          statusButton = <Unpublish className="unpubButton" onClick = {()=>this.updateDraftlingStatus(slug)} />
        }
        else {
          statusButton = <Publish className="pubButton"onClick = {()=>this.updateDraftlingStatus(slug)} />
        }
        return (
            <div className="draftlingPage">
              <div className="myDraftActions">
               <Link to={`/edit/${slug}`}>
                  <button type="button">Edit</button>
                </Link> 
              
                {statusButton}

                <button type="button">Delete</button>
              </div>
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

