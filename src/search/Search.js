import React from 'react';
import './Search.css';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    render() {
        return (
            <div className="searchPage">
                <h1>Search For Other Writers's Draftlings</h1>
                <section className="titleSearch">
                    <label htmlFor="titleSearch">Title:</label>
                    <input type="text" placeholder="Search by title"></input>
                </section>
                <br />
                <section className="authorSearch">
                    <label htmlFor="authorSearch">Author:</label>
                    <input type="text" placeholder="Search by author"></input>
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
            </div>
        );
    }
}

export default Search;