import React from 'react';
import './CritiqueFreeform.css';
import ApiContext from '../ApiContext';
import config from '../config';

/* This component renders the form for Critique Freeform, found by navigating to a published draftling, and clicking "Post Freeform Critique"*/

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
            critfreeform: this.state.critfreeform,
            draftling_id: this.props.match.params.id  
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
                        
                        <label htmlFor="opening">Opening Comments
                        <br />
                            <textarea style={styleTextArea} name="opening" id="opening" onChange={this.handleChange} ></textarea>
                        </label>
                        <br />
                        <br />
                        <label htmlFor="critfreeform">Freeform Critique
                        <br />
                            <textarea style={styleTextArea} name="critfreeform" id="critfreeform" onChange={this.handleChange} required></textarea>
                        </label>
                        <br/>
                        <input type="submit" className="submitBtn" value="Post Critique"></input>
                   
                    </form>
            </div>
        );
    }
}

export default CritiqueFreeform;