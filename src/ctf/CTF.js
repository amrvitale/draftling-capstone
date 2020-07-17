import React from 'react'
import ApiContext from '../ApiContext'
import './CTF.css'

class CTF extends React.Component {
    static contextType = ApiContext;
    render() {
       const { plot, pov, characters, dialogue, gramspell, overall } = this.props.crit
       
        return (
            <div className="critique">
                <h3>Template Critique</h3>
                <p>{plot}</p> <br/>
                <p>{pov}</p> <br/>
                <p>{characters}</p> <br/>       
                <p>{dialogue}</p><br/> 
                <p>{gramspell}</p><br/>
                <p>{overall}</p><br/>     
            </div>
        );
       
    }
};

export default CTF;

//if else like with status button, using column as flag