import React from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import Published from '../published/Published'

class Search extends React.Component {
    render() {
        return (
            <div className="searchPage">
                <h1>Search For Other Writers's Draftlings</h1>
                <br />
                <br />
                <section className="titleSearch">
                    <label htmlFor="titleSearch">Title:</label>
                    <input type="text" placeholder="Search by title"></input>
                </section>
                <br />
                <section className="wordcountSearch">
                    <label htmlFor="wordcountSearch">Word Count:</label>
                    <select name="wordcount" id="wordcount" >
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

                <section className="genreSearch">
                    <label htmlFor="genreDrop">Search by Fiction Genre</label>
                    <select name="genreDrop" id="genreDrop">
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
                    <Link to='/results'>
                        <button type="submit">Search</button>
                    </Link>
                </section>
                <br />
                <br />
                <Published />
            </div>
        );
    }
}

export default Search;