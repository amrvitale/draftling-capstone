import React from 'react'
import { Link } from 'react-router-dom'
import Read from '../read/Read'
import CritiqueFreeForm from '../critiquefreeform/CritiqueFreeform'
import CritiqueTemplate from '../critiquetemplate/CritiqueTemplate'

class ChooseCritique extends React.Component {
    render() {
        return(
            <div>
                <h1>Choose a critique type for __</h1>
                <Link to='/postfreeformcritique'>
                        <button type="submit">Write a Freeform Critique</button>
                </Link> 

                <Link to='/posttemplatecritique'>
                        <button type="submit">Write a Templated Critique</button>
                </Link> 
            </div>
        );
    }
}

export default ChooseCritique;
