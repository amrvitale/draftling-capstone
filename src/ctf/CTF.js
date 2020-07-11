import React from 'react'


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