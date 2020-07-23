import React from 'react';
import './Search.css';
import config from '../config';
import Draftling from '../draftling/Draftling';

/* Search component. Only published draftlings will appear in the search results. */

class Search extends React.Component {
    state = {
        titleValue: '',
        wordcountValue: '',
        genreValue: '',
        draftlings: [],
        noResults: false,
    };

    handleTitleChange = event => {
        this.setState({ titleValue: event.target.value });
    };

    handleGenreChange = event => {
        this.setState( {genreValue: event.target.value});
    }

    handleWordCountChange = event => {
        this.setState( {wordcountValue: event.target.value});
    }

    handleSearch = () => {
        this.makeAPICall();
    }

    makeAPICall = searchInput => {
        let url = `${config.API_ENDPOINT}/search?`;
        let searchTerms = [];
        if (this.state.titleValue.length > 0) searchTerms.push(`title=${this.state.titleValue}`);
        if (this.state.wordcountValue.length > 0) searchTerms.push(`wordcount=${this.state.wordcountValue}`);
        if (this.state.genreValue.length > 0) searchTerms.push(`genre=${this.state.genreValue}`);
        url += searchTerms.join('&');
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },   
        })

        .then((response) => {
            if(!response.ok) {
                throw response.message;
            }
            console.log("the whole response", response)
            return response.json();
        })

        .then((responseJson) => {
            let draftling = responseJson.draftlings;
            console.log(draftling)
            this.setState( { draftlings: draftling, noResults: draftling.length === 0,});
            console.log({draftlings: draftling})
        })

        .catch(error => {
            console.log({ error })
        })
    }

    render() {
    
        return (
            <div className="searchPage"> 
                <div className="searchPageHero"> 
                    <h1 className="searchHeading">Search Draftlings</h1>
                </div>
                    <br />
                    <br />
                <section className="titleSearch">
                    <label htmlFor="titleSearch">Title:</label>
                    <input 
                        id="titleSearch"
                        name="titleSearch"
                        type="text" 
                        onChange={event => this.handleTitleChange(event)} 
                        value={this.state.titleValue}
                    />
                </section>
                <br />
                <section className="wordcountSearch">
                    <label htmlFor="wordcountSearch">Word Count:</label>
                        <select 
                            name="wordcountSearch" 
                            id="wordcountSearch" 
                            onChange={event => this.handleWordCountChange(event)} 
                            value={this.state.wordcountValue}
                        >
                            <option></option>
                            <option value="Six word story">Six word story</option>
                            <option value="Minisaga">Minisaga: 50 words</option>
                            <option value="Micro fiction">Microfiction: 51 - 100 words</option>
                            <option value="Twitterature">Twitterature: 280 characters</option>
                            <option value="Sudden Fiction">Sudden Fiction: 300 - 750 words</option>
                            <option value="Flash Fiction">Flash Fiction: 751 - 1000 words</option>
                            <option value="Short Story">Short Story: 1001 - 7500 words</option>
                            <option value="Novellete">Novellete: 7501 - 20,000 words</option>
                            <option value="Novella">Novella: 20,001 - 60,000 words</option>
                            <option value="Novel">Novel: 60,0001 + words</option>
                        </select>
                </section>
                <br />
                <section className="genreSearch">
                    <label htmlFor="genreDrop">Fiction Genre</label>
                        <select 
                            name="genreDrop" 
                            id="genreDrop"
                            onChange={event => this.handleGenreChange(event)} 
                            value={this.state.genreValue}
                        >
                            <option></option>
                            <option value="Action/Adventure">Action/Adventure</option>
                            <option value="Classic">Classic</option>
                            <option value="Contempory">Contempory</option>
                            <option value="Crime/Detective">Crime/Detective</option>
                            <option value="Fable">Fable</option>
                            <option value="Fairy Tale">Fairy Tale</option>
                            <option value="Folktale">Folktale</option>
                            <option value="Gothic">Gothic</option>
                            <option value="Historical Fiction">Historical Fiction</option>
                            <option value="Horror">Horror</option>
                            <option value="Humor">Humor</option>
                            <option value="Magical Realism">Magical realism</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Romance">Romance</option>
                            <option value="Science Fiction">Science Fiction</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Western">Western</option>
                        </select>
            </section>

            <button type="submit" onClick={this.handleSearch}>Search</button>
            <br />
            <br />
            <br />
            <br />
                {this.state.draftlings.length > 0 && (
                    <div id="draftlingSearchResultContainer">
                        {this.state.draftlings.map((draftling, index) => (
                            <div className="single-draftling" key={index}>
                                <Draftling 
                                    {...draftling}
                                />
                            </div>
                        ))}
                    </div>
                )}
            
                {this.state.noResults && <p>No results found for your search. Please search again!</p>}
          
            </div>
        );
    }
}

export default Search;


