import React from 'react';

import './style.css';


const Search = ({onChange, value}) => {
  return(
    <div className="wrap">
      <div className="search">
        <input type="text"
          className="searchTerm"
          placeholder="Searching for comic?" />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Search;
