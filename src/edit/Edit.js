import React from 'react';
import { useParams } from "react-router-dom";
import DraftlingPage from '../draftlingpage/DraftlingPage'
import ApiContext from '../ApiContext'
import {findDraftling} from '../draftlings-helpers'

class Edit extends React.Component {

    state = {
        title: "",
        wordcount: "",
        content: ""
    }

    componentDidMount() {
        const {draftlings = [] } = this.context
        const {id} = this.props.match.params
        console.log(id)
        const editDraftling = draftlings.find(draftling => draftling.id === parseInt(id))
        this.setState({
            ...editDraftling,
        })
        console.log(editDraftling)
    }

    static defaultProps = {
        match: {
          params: {}
        }
      }
      static contextType = ApiContext    

    render() {
 
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
                     <h1>Edit Your Draftling</h1>
                     <br />
                    <label htmlFor="draftlingTitle">Draftling Title:</label>
                    <input value={this.state.title} type="text" name="title" style={styleTitle} onChange={this.handleChange} required></input>
                    <br />
                    <label htmlFor="wordcount">Choose an approximate word count.</label>
                    <select value={this.state.wordcount} name="wordcount" id="wordcount" onChange={this.handleChange} required>
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
                    <textarea value={this.state.content} style={styleTextArea} name="content" onChange={this.handleChange} required></textarea>
                    <br/>
                    <input type="submit" value="Submit Draft to My Dash"></input>
                </form>
            </div>
        )
    }
}

export default Edit;