import React from "react";

function Search({ query, setQuery, search }) {
  return (
    <div className="SearchEngine">
      <input
        type="text"
        className="city-search"
        placeholder="City Name"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      <button>
        <i className="fas fa-search" style={{ fontSize: "18px" }}></i>
      </button>
    </div>
  );
}

export default Search;
