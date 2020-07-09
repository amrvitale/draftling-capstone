import React from 'react'
import CritiqueFreeform from '../critiquefreeform/CritiqueFreeform';
import CritiqueTemplate from '../critiquetemplate/CritiqueTemplate'

class Critique extends React.Component {
    render() {
        let critiqueType;

       // if ( s ) {
       // critiqueType = <CritiqueFreeform />
      //  }

       // else  {
       //  critiqueType = <CritiqueTemplate />
       // }
       
        return (
            <div className="critiqueList">
              {critiqueType}
            </div>
        );
       
    }
};

export default Critique;

//if else like with status button, using column as flag