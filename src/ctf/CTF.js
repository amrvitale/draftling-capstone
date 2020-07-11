import React from 'react'
import CritiqueFreeform from '../critiquefreeform/CritiqueFreeform';
import CritiqueTemplate from '../critiquetemplate/CritiqueTemplate'

class CTF extends React.Component {
    render() {
      
       
        return (
            <div className="critiqueList">
              {this.props.critiqueType}
            </div>
        );
       
    }
};

export default CTF;

//if else like with status button, using column as flag