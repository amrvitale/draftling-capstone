import React from 'react'


class CFF extends React.Component {
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
              {this.props.critiqueType}
            </div>
        );
       
    }
};

export default CFF;

//if else like with status button, using column as flag