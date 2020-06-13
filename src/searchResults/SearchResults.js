import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/Search';
class SearchResults extends React.Component {
    render() {
        return (
            <div className="searchResults">
                <h1>Search Results</h1>
                <section className="resultsPlaceholder">
                <Link to='/read'>
                    <button type="submit">Read</button>
                </Link>

                </section>
                
                <Link to='/search'>
                    <button type="submit">Return to Search</button>
                </Link>
            </div>
        );
    }
}

export default SearchResults;

//except read link will take you to id of story yes?