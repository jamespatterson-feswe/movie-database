import React, { useState } from "react";
import "./main.scss";
import HeaderFooter from "../header-footer/header-footer";
import Movies from "../movies/movies";

function Main() {
  const [ searchTerm, setSearchTerm ] = useState('');

  const handleSearchTerm = (term: string) => {
      setSearchTerm(term);
  }
  return (
    <main>
      <HeaderFooter params={{ header: true }} />
      <div className="input">
        <input aria-label="movie search input field"
          data-testid="movie-search-input"
          onChange={e => handleSearchTerm((e.target.value).toLowerCase())}
          placeholder="Search the database of movies"
          type="search"
          value={searchTerm}>
        </input>
      </div>
      <section className="container">
        <Movies searchTerm={searchTerm}/>
      </section>
      <HeaderFooter params={{ footer: true }} />
    </main>
  );
}

export default Main;
