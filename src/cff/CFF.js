import React from 'react'
import ApiContext from '../ApiContext';
import './CFF.css'


class CFF extends React.Component {
    static contextType = ApiContext;
    render() {
       const {  opening, critfreeform } = this.props
       
        return (
            <div className="critique">
                <p>{opening}</p>
                <p>{critfreeform}</p>            
            </div>
        );
       
    }
};

export default CFF;

//if else like with status button, using column as flag