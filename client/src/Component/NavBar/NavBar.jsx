
import {Link, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar= () =>{
  const location = useLocation();
  return (
    <div className={style.mainContainer}  >
      <Link  to="/home" >HOME</Link>
      {location.pathname === "/home" && <SearchBar/> }
      <Link to="/from" >From</Link>
    </div> 
  )
}
export default NavBar;