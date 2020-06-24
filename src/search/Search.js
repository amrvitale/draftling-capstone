import React from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import config from '../config'

class Search extends React.Component {
    state = {
        titleValue: '',
        wordcountValue: '',
        genreValue: '',
        draftlings: []
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
    let url = `${config.API_ENDPOINT}/search/`;
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

    .then(draftling => {
        console.log(draftling)
        this.setState( { draftlings: draftling.draftlings})
    })

    .catch(error => {
        console.log({ error })
    })
}

    render() {
    
        return (
            <div className="searchPage">
                <h1>Search Draftlings</h1>
                <br />
                <br />
                <section className="titleSearch">
                    <label htmlFor="titleSearch">Title:</label>
                    <input 
                        type="text" 
                        placeholder="Search by title" 
                        onChange={event => this.handleTitleChange(event)} 
                        value={this.state.titleValue}
                     />
                </section>
                <br />
                <section className="wordcountSearch">
                    <label htmlFor="wordcountSearch">Word Count:</label>
                    <select 
                        name="wordcount" 
                        id="wordcount" 
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
                    <label htmlFor="genreDrop">Search by Fiction Genre</label>
                    <select 
                        name="genreDrop" 
                        id="genreDrop"
                        onChange={event => this.handleGenreChange(event)} 
                        value={this.state.genreValue}
                    >
                        <option></option>
                        <option value="action / adventure">Action / Adventure</option>
                        <option value="classic">Classic</option>
                        <option value="contemporary">Contemporary</option>
                        <option value="crime/detective">Crime / Detective</option>
                        <option value="fable">Fable</option>
                        <option value="fairy tale">Fairy Tale</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="folktale">Folktale</option>
                        <option value="gothic">Gothic</option>
                        <option value="historical fiction">Historical Fiction</option>
                        <option value="horror">Horror</option>
                        <option value="humor">Humor</option>
                        <option value="magical realism">Magical realism</option>
                        <option value="mystery">Mystery</option>
                        <option value="romance">Romance</option>
                        <option value="science fiction">Science Fiction</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                    </select>
                </section>

                    <button type="submit" onClick={this.handleSearch}>Search</button>
                    <br />
                    {this.state.draftlings ? (
                        <div id="draftlingSearchResultContainer">
                            {this.state.draftlings.map((draftling, index) => (
                                <div class="single-draftling" key={index}>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Search for a draftling</p>
                    )}
            </div>
        );
    }
}

export default Search;


