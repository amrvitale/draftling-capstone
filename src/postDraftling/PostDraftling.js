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
            genre: this.state.genre,
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
            <div className="postDraftlingPage">
                <div className="postDraftlingHero">                    
                <h1 className="postHeader">Write your Draftling</h1>
                    <p className="instructions">Enter the following fields for your Draftling. Upon submitting, it will be placed on your shelf until it's ready to be published.</p>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <label className="postLabel" htmlFor="title">Draftling Title:</label>
                    <input type="text" name="title" id="title" style={styleTitle} onChange={this.handleChange} required></input>
                    <br />
                    <label className="postLabel" htmlFor="wordcount">Choose an approximate word count.</label>
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
                    <label className="postLabel" htmlFor="genre">Choose a genre.</label>
                    <select name="genre" id="genre" onChange={this.handleChange} required>
                        <option></option>
                        <option value="Action/Adventure">Action/Adventure</option>
                        <option value="Classic">Classic</option>
                        <option value="Contempory">Contempory</option>
                        <option value="Crime/Detective">Crime/Detective</option>
                        <option value="Fable">Fable</option>
                        <option value="Fairy Tale">Fairy Tale</option>
                        <option value="Folktale">Folktale</option>
                        <option value="Gothic">Gothic</option>
                        <option value="Historical Fiction">Historical Fiction</option>
                        <option value="Horror">Horror</option>
                        <option value="Humor">Humor</option>
                        <option value="Magical Realism">Magical realism</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Romance">Romance</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Western">Western</option>
                    </select>
                    <br/>
                    <textarea style={styleTextArea} name="content" onChange={this.handleChange} required></textarea>
                    <br/>
                    <input type="submit" className="submitBtn" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default PostDraftling;