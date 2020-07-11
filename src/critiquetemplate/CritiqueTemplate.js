import React from 'react';
import './CritiqueTemplate.css'
import ApiContext from '../ApiContext'
import config from '../config'
import {findDraftling} from '../draftlings-helpers'
import DraftlingPage from '../draftlingpage/DraftlingPage'


class CritiqueTemplate extends React.Component {
    componentDidMount() {
        const {draftlings = [] } = this.context
        const {id} = this.props.match.params
        console.log(this.props.match.params.id)
    }

    static defaultProps = {
       match: {
          params: {}
        }
    }

    static contextType = ApiContext    

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

        const templateCrit = {
            plot: this.state.plot,
            pov: this.state.pov,
            characters: this.state.characters,
            dialogue: this.state.dialogue,
            gramspell: this.state.gramspell,
            overall: this.state.overall,
            draftling_id: this.props.match.params.id
        }
        console.log(templateCrit)
        console.log(this.state.templateCrits)
        console.log(`${config.API_ENDPOINT}/draftling/template/${this.props.match.params.id}`)

        fetch(`${config.API_ENDPOINT}/draftling/template/${this.props.match.params.id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(templateCrit)
        })

        .then(res => {
            return res.json()
        })

        .then(templateCrit => {
            this.context.addTemplateCrit(templateCrit)
            this.props.history.push(`/draftling/${this.props.match.params.id}`)
        })
        console.log(this.state.templateCrits)
        console.log(this.context.templateCrits)
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

        return (
            <div className="template">
                <div className="templateHero">
                    <h2 className="templateHeading">Templated Critique</h2>
                    <p className="templateTagline">Please remember to be objective, especially if the piece you're critiquing is not in a style or genre that you prefer. Always start with the strengths of the piece, then make solid suggestions for improvement.</p>
                </div>   
                <br />
                <br />
                <form onSubmit={this.handleSubmit}>
                    <label>Plot</label>
                    <br />
                    <p className="templateInstructions">How would you improve the believabilty of the plot?<br />How would you make the plot easier to follow?<br /> How would you change the arc to leave you more satisfied at its resolution?<br /> If you have no improvements, leave this blank.</p>
                    <br />
                    <textarea style={styleTextArea} name="plot" onChange={this.handleChange}></textarea>
                    <br /> <br />
                    <label>Point of View</label>
                    <br />
                    <p className="templateInstructions">How would you fix any serious point of view issues in this work?<br />If there was confusion in the point of view, how would you improve that?<br />If the point of view changed, is there any way that you could make the change smoother?<br />If you have no improvements, leave this blank.</p>
                    <br />
                    <textarea style={styleTextArea} name="pov" onChange={this.handleChange}></textarea>
                    <br /> <br />
                    <label>Characters</label>
                    <br />
                    <p className="templateInstructions">How would you make the characters seem more real?<br />How would you make them form more powerful connections with the reader?<br />If you have no improvements, leave this blank.</p>
                    <br />
                    <textarea style={styleTextArea} name="characters" onChange={this.handleChange}></textarea>
                    <br /> <br />
                    <label>Dialogue</label>
                    <br />
                    <p className="templateInstructions">How would you improve the naturalness and believability of the dialogue?<br />How would you improve the amount of dialogue in the work?<br />If you have no improvements, leave this blank.</p>
                    <br />
                    <textarea style={styleTextArea} name="dialogue" onChange={this.handleChange}></textarea>
                    <br /> <br />
                    <label>Grammar and Spelling</label>
                    <br />
                    <p className="templateInstructions">What serious grammar and spelling issues did you find?<br />If you have no improvements, leave this blank.</p>
                    <br />
                    <textarea style={styleTextArea} name="gramspell" onChange={this.handleChange}></textarea>
                    <br /> <br />
                    <label>Overall Comments</label>
                    <br />
                    <p className="templateInstructions">Any overall comments about the piece?</p>
                    <br />
                    <textarea style={styleTextArea} name="overall" onChange={this.handleChange} required></textarea>
                    <br /> <br />
                    <input type="submit" value="Post Critique"></input>
                </form>
            </div>
        );
    }
}

export default CritiqueTemplate;