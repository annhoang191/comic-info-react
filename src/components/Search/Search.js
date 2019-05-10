import React from 'react';

import './style.css';


const Search = ({onChange, value}) => {
  return(
    <div className="wrap">
      <form className="search">
        <input type="text"
          className="searchTerm"
          placeholder="Searching for comic?"
          onChange={onChange} />
        <button type="submit" className="searchButton btn btn-primary">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default Search;
