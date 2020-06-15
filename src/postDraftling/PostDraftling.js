import React from 'react';
import './PostDraftling.css';
import ApiContext from '../ApiContext'
import config from '../config'

class PostDraftling extends React.Component {

    static defaultProps = {
        history: {
            push: () => { }
        },
    }
    static contextType = ApiContext;

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({[e.target.getAttribute('name')]: e.target.value})

    }

    handleSubmit = e => {
        e.preventDefault()
        const newDraftling = {
            title: this.state.title,
            wordcount: this.state.wordcount,
            content: this.state.content,
            modified: new Date(),
        }
        console.log(newDraftling)

        fetch(`${config.API_ENDPOINT}/mydraftlings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDraftling),
        })
        .then(res => {
          
            return res.json()
        })
        .then(draftling => {
            console.log(draftling)
            this.context.addDraftling(draftling)
            this.props.history.push(`/mydraftlings/`)
           
        })
        .catch(error => {
            console.log({ error })
        })
    }

    render() {
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
            <div className="postDraftling">
                <h1>Post your Draftling below</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="draftlingTitle">Draftling Title:</label>
                    <input type="text" name="title" style={styleTitle} onChange={this.handleChange} required></input>
                    <br />
                    <label htmlFor="wordcount">Choose an approximate word count.</label>
                    <select name="wordcount" id="wordcount" onChange={this.handleChange} required>
                        <option></option>
                        <option value="sixWordStory">Six word story</option>
                        <option value="minisaga">Minisaga: 50 words</option>
                        <option value="microfiction">Microfiction: 51 - 100 words</option>
                        <option value="twitterature">Twitterature: 280 characters</option>
                        <option value="suddenFiction">Sudden Fiction: 300 - 750 words</option>
                        <option value="flashFiction">Flash Fiction: 751 - 1000 words</option>
                        <option value="shortStory">Short Story: 1001 - 7500 words</option>
                        <option value="novellete">Novellete: 7501 - 20,000 words</option>
                        <option value="novella">Novella: 20,001 - 60,000 words</option>
                        <option value="novel">Novel: 60,0001 + words</option>
                    </select>
                    <br />
                    <textarea style={styleTextArea} name="content" onChange={this.handleChange} required></textarea>
                    <br/>
                    <input type="submit" value="Post Draftling"></input>
                </form>
            </div>
        )
    }
}

export default PostDraftling;