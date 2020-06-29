import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import Draftling from '../draftling/Draftling';
import {findDraftling} from '../draftlings-helpers'
import { Link } from 'react-router-dom'
import Edit from '../edit/Edit'
import './DraftlingPage.css'

class DraftlingPage extends React.Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
      static contextType = ApiContext    
      
      apiData = {};
    
    updateDraftlingStatus() {
      let url = `${config.API_ENDPOINT}/:id/update_status`;
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
        const {slug} = this.props.match.params
        console.log(slug)
        let selectedDraftling = draftlings.find(draftling => draftling.id === parseInt(slug))
        console.log(draftlings, selectedDraftling)
        console.log(selectedDraftling)

        //both publish and delete buttons should be functions that run js, do not take to new page
        //if published show un
        //if un show published

        let buttonVar;

        if (selectedDraftling.status=== "published") { 
        //buttonVar = unpublished
        }
        else {
         //buttonVar = published;
        }
        ////{buttonVar}
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