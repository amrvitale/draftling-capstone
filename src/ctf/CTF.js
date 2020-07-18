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
                <p className="critText">Plot: {plot}</p> <br/>
                <p className="critText">POV: {pov}</p> <br/>
                <p className="critText">Characters: {characters}</p> <br/>       
                <p className="critText">Dialogue: {dialogue}</p><br/> 
                <p className="critText">Grammar and spelling: {gramspell}</p><br/>
                <p className="critText">Overall: {overall}</p><br/>     
            </div>
        );
       
    }
};

export default CTF;

//if else like with status button, using column as flag