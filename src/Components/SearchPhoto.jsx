import React, { useState, useEffect } from "react";

const SearchPhoto = ({ searchData }) => {
  const [data, setData] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchData(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={data} onChange={handleClick}></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchPhoto;
