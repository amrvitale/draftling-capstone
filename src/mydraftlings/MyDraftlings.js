  
import React from 'react';
import { Link } from 'react-router-dom';
import Read from '../read/Read';

class MyDraftlings extends React.Component {
    render() {
        console.log(this.props.draftlings);

        return (
            <div className="mydraftlings">
                <h1>My Draftlings</h1>
                <section className="draftling1">
                    <h2>Draftling Title 1</h2>
                    <Link to="./read">
                        <button type="button">Read</button>
                    </Link>

                    <Link to="./edit">
                        <button type="button">Edit</button>
                    </Link>
                    <button type="button">Delete</button>
                </section>

             


            </div>
        );
    }
}

export default MyDraftlings;
