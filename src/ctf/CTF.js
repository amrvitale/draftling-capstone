import React from 'react'
import ApiContext from '../ApiContext'
import './CTF.css'

class CTF extends React.Component {
    static contextType = ApiContext;
    render() {
       const { plot, pov, characters, dialogue, gramspell, overall } = this.props
       
        return (
            <div className="critique">
                <p>{plot}</p>
                <p>{pov}</p>
                <p>{characters}</p>       
                <p>{dialogue}</p>     
                <p>{gramspell}</p>  
                <p>{overall}</p>          
            </div>
        );
       
    }
};

export default CTF;

//if else like with status button, using column as flag