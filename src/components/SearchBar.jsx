import React from 'react'


const SearchBar = ({setSearch}) => {
  const keywordsFilter = (searchValue) => {
    setSearch(searchValue);
  }

  return (
      <div className="form" id="search-bar">
        <input 
          className="text-input" 
          id="search-input" 
          type="text" 
          placeholder="Search an emoji ..." 
          onChange={e=> {
            keywordsFilter(e.target.value)
          }}
        />
      </div>
  );
};

export default SearchBar