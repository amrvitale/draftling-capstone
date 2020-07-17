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
                <p>Plot: {plot}</p> <br/>
                <p>POV: {pov}</p> <br/>
                <p>Characters: {characters}</p> <br/>       
                <p>Dialogue: {dialogue}</p><br/> 
                <p>Grammar and spelling: {gramspell}</p><br/>
                <p>Overall: {overall}</p><br/>     
            </div>
        );
       
    }
};

export default CTF;

//if else like with status button, using column as flag