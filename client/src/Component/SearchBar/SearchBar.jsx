import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDogs } from "../../Redux/Action/Action";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [found, setFound] = useState()

  const handleChange = (e) => {
    setFound(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchDogs(found));
  };

  return (
    <div>
      {/* <div>SearchBar</div>; */}
      <form onSubmit={handleSearch}>
        <label>Search Dog:</label>
        <input
          type="search"
          placeholder="Search Name...."
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
