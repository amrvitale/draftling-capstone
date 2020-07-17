
import React from 'react'
import ApiContext from '../ApiContext';
import './CFF.css'


class CFF extends React.Component {
    static contextType = ApiContext;
    render() {
       const {  opening, critfreeform } = this.props.crit;
        return (
            <div className="critique">
                <p>{opening}</p><br/>
                <p>{critfreeform}</p>
            </div>
        );

    }
};

export default CFF;