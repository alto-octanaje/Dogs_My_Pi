import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDogs } from "../../Redux/Action/Action";
import { IoSearchCircle } from "react-icons/io5";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [found, setFound] = useState();

  const handleChange = (e) => {
    setFound(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchDogs(found));
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSearch} className={style.formSearch}>
        <label>Search Dog:</label>
        <input
          type="search"
          placeholder="Search Name...."
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">
          <IoSearchCircle size={30} />
        </button>
      </form>
    </div>
  );
}
