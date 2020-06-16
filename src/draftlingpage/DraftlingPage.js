import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import Draftling from '../draftling/Draftling';
import {findDraftling} from '../draftlings-helpers'

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
             <h1>Title: {(selectedDraftling) ? selectedDraftling.title: ""}</h1> 
              <br />
             <p>Word Count: {(selectedDraftling) ? selectedDraftling.wordcount: ""}</p> 
              <br />
              <p>{(selectedDraftling) ? selectedDraftling.content: ""}</p>
                
            </div>
        );
    }
}

export default DraftlingPage;