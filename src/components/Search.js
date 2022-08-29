import React from "react";

const Search = ({ search, setInput }) => {
  const getInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input onChange={getInput} type="text" />
      <button onClick={search}>搜圖</button>
    </div>
  );
};

export default Search;
