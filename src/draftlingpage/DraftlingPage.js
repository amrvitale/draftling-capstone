import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import {getCritiquesForDraftlings} from '../draftlings-helpers'
import { Link } from 'react-router-dom'
import './DraftlingPage.css'
import CFF from '../cff/CFF'
import CTF from '../ctf/CTF'

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

  showCrits(crits) {
    console.log(crits,"crits")
    return crits.map(critique =>  {
      let component
      let key
      console.log('critique: ', critique);
      if (critique.hasOwnProperty('critfreeform')) {
        component = <CFF crit={critique} />
        key = 'freeform'+ critique.draftling_id + critique.id;
      } else {
        component = <CTF crit={critique}/>
        key = 'template' + critique.draftling_id + critique.id;
      }
      return (
       <li key={key}>
       { component }
      </li>
   )
    })
  }

  render() {
      const {draftlings = [] } = this.context
      const {slug} = this.props.match.params;
      console.log(slug)
      console.log(draftlings, "draftlings")
      let selectedDraftling = draftlings.find(draftling => draftling.id === parseInt(slug))
      console.log(draftlings, selectedDraftling, "draftlings, selectedDraftling")

      let statusButton;


      if (selectedDraftling === undefined ) {
       let html = <p>Readying your draftling!</p>
       return html
      }
      else if (selectedDraftling.status=== "published") {
        statusButton = <button className="unpubButton" onClick = {()=>this.updateDraftlingStatus(selectedDraftling)}>Unpublish</button>
      }
      else {
        statusButton = <button className="pubButton"onClick = {()=>this.updateDraftlingStatus(selectedDraftling)} >Publish</button>
      }

      const { templateCrits = [], freeformCrits = [] } = this.context;
      const allCritiques = templateCrits.concat(freeformCrits)
      console.log(allCritiques, "allCritiques");
      console.log(this.context, "this.context")

      const crits = getCritiquesForDraftlings(allCritiques, selectedDraftling.id)
      console.log(crits, "crits")
      return (
        <div className="draftlingPage">
          <div className="myDraftActions">
            <Link to={`/edit/${slug}`}>
              <button type="button">Edit</button>
            </Link>

            {statusButton}


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
            <h2 className="critiqueh2">Any Critiques Will Appear Below</h2>
          <ul className="critList">
          {this.showCrits(crits)}
          </ul>

          </div>
        </div>
      );
  }
}
export default DraftlingPage;