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
    <form onSubmit={handleSubmit} className="form">
      <input
        className="form__input"
        type="text"
        value={data}
        placeholder="Search your favorite image"
        onChange={handleClick}
      ></input>
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default SearchPhoto;
