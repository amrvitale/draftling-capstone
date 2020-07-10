import React from 'react';
import './CritiqueFreeform.css'
import ApiContext from '../ApiContext'
import config from '../config'
import {findDraftling} from '../draftlings-helpers'
import DraftlingPage from '../draftlingpage/DraftlingPage'

class CritiqueFreeform extends React.Component {

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

        const freeformCrit = {
            opening: this.state.opening,
            critfreeform: this.state.critfreeform   
        }
        console.log(freeformCrit)
        console.log(this.state.freeformCrits)
        console.log(`${config.API_ENDPOINT}/draftling/freeform/${this.props.match.params.id}`)

        fetch(`${config.API_ENDPOINT}/draftling/freeform/${this.props.match.params.id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(freeformCrit)
        })
        
        .then(res => {
            return res.json()
        })

        .then(freeformCrit => {
            this.context.addFreeformCrit(freeformCrit)
            this.props.history.push(`/draftling/${this.props.match.params.id}`)
        })
        console.log(this.state.freeformCrits)
        console.log(this.context.freeformCrits)

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
            <div className="freeform">
                <div className="freeformHero">
                    <h1 className="freeformHeading">Post a Freeform Critique</h1>
                    <p className="freeformTagline">Please remember to be objective, especially if the piece you're critiquing is not in a style or genre that you prefer. Always start with the strengths of the piece, then make solid suggestions for improvement.</p>
                </div>
                <br />
                <br />
                    <form onSubmit={this.handleSubmit}>
                        
                        <label>Opening Comments</label>
                        <br />
                        <textarea style={styleTextArea} name="opening" onChange={this.handleChange} ></textarea>
                        <br />
                        <br />
                        <label>Freeform Critique</label>
                        <br />
                        <textarea style={styleTextArea} name="critfreeform" onChange={this.handleChange} required></textarea>

                        <br/>
                        <input type="submit" value="Post Critique"></input>
                   
                    </form>
            </div>
        );
    }
}

export default CritiqueFreeform;