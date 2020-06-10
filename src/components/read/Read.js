import React from 'react';
import { Link } from 'react-router-dom'

class Read extends React.Component {
    render() {
        return (
            <div className="readOnlyDraftlings">
                <section class="placeholderForSelectedDraftling">
                  <p>Placeholder for read only version of selected Draftling...</p>
                  <Link to='/postfreeformcritique'>
                        <button type="submit">Write a freeform critique</button>
                  </Link> 

                  <Link to='/posttemplatecritique'>
                        <button type="submit">Write a templated critique</button>
                  </Link> 
                </section>

            </div>
        );
    }
}
export default Read;

//make it toggle one or the other and pop open the critique option