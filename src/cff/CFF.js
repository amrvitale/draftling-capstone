
import React from 'react';
import ApiContext from '../ApiContext';
import './CFF.css';

/* This component renders a completed Critique Freeform. It is called in Draftling Page, where it appears for the user's draftling*/

class CFF extends React.Component {
    static contextType = ApiContext;
    render() {
       const {  opening, critfreeform } = this.props.crit;
        return (
            <div className="critique">
                <h3>Freeform Critique</h3>
                <p className="critText">Opening comments: {opening}</p><br/>
                <p className="critText">Overall: {critfreeform}</p>
            </div>
        );

    }
};

export default CFF;