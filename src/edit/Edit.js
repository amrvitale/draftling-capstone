import React from 'react';
import { useParams } from "react-router-dom";
import DraftlingPage from '../draftlingpage/DraftlingPage'
import ApiContext from '../ApiContext'
import {findDraftling} from '../draftlings-helpers'

class Edit extends React.Component {

    componentDidMount() {
        const {draftlings = [] } = this.context
        const {slug} = this.props.match.params
        console.log(slug)
        const editDraftling = draftlings.find(draftling => draftling.id === parseInt(slug))
        console.log(editDraftling)
    }

    static defaultProps = {
        match: {
          params: {}
        }
      }
      static contextType = ApiContext    

    render() {
        this.setState({
            title: editDraftling.title,
           wordcount: editDraftling.wordcount,
           content: editDraftling.content
        })

       

        const { id } = this.props.match.params  
        const styleTextArea = {
            minHeight: '380px',
            minWidth: '380px',
            padding: '9px',
            boxSizing: 'border-box',
            fontSize: '15px',
            textAlign: 'left'
        };

        const styleTitle = {
            minWidth: '200px'
        }
        return (
            <div className="edit">
                 <form onSubmit={this.handleSubmit}>
                    <label htmlFor="draftlingTitle">Draftling Title:</label>
                    <input type="text" name="title" style={styleTitle} onChange={this.handleChange} required></input>
                    <br />
                    <label htmlFor="wordcount">Choose an approximate word count.</label>
                    <select name="wordcount" id="wordcount" onChange={this.handleChange} required>
                        <option></option>
                        <option value="Six word story">Six word story</option>
                        <option value="Minisaga">Minisaga: 50 words</option>
                        <option value="Micro fiction">Microfiction: 51 - 100 words</option>
                        <option value="Twitterature">Twitterature: 280 characters</option>
                        <option value="Sudden Fiction">Sudden Fiction: 300 - 750 words</option>
                        <option value="Flash Fiction">Flash Fiction: 751 - 1000 words</option>
                        <option value="Short Story">Short Story: 1001 - 7500 words</option>
                        <option value="Novellete">Novellete: 7501 - 20,000 words</option>
                        <option value="Novella">Novella: 20,001 - 60,000 words</option>
                        <option value="Novel">Novel: 60,0001 + words</option>
                    </select>
                    <br />
                    <textarea style={styleTextArea} name="content" onChange={this.handleChange} required></textarea>
                    <br/>
                    <input type="submit" value="Submit Draft to My Dash"></input>
                </form>
            </div>
        )
    }
}

export default Edit;