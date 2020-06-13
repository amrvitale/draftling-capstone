import React from 'react';
import { Link } from 'react-router-dom'

class Read extends React.Component {
    render() {
        return (
            <div className="readOnlyDraftlings">
                <section class="placeholderForSelectedDraftling">
                  <p>Placeholder for read only version of selected Draftling...</p>
                  <Link to='/choosecritique'>
                        <button type="submit">Write a critique</button>
                  </Link> 
                </section>

            </div>
        );
    }
}
export default Read;

//make it toggle one or the other and pop open the critique option