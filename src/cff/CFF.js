
import React from 'react'
import ApiContext from '../ApiContext';
import './CFF.css'


class CFF extends React.Component {
    static contextType = ApiContext;
    render() {
       const {  opening, critfreeform } = this.props.crit;
        return (
            <div className="critique">
                <h3>Freeform Critique</h3>
                <p>Opening comments: {opening}</p><br/>
                <p>Overall: {critfreeform}</p>
            </div>
        );

    }
};

export default CFF;