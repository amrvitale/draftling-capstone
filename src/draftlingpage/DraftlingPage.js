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
   
      handleViewDraftling = draftling_id => {
       this.props.history.push('/')
   }
        

    render() {
        const {draftlings = [] } = this.context
        const { draftling_id } = this.props.match.params
        console.log(draftling_id)
        const draftling = findDraftling(draftlings, parseInt(draftling_id)) || { content: ''}
        console.log(draftling);

        return (
            <div>
                <Draftling
                    title={draftling.title}
                    content={draftling.content}
                />
            </div>
        );
    }
}

export default DraftlingPage;