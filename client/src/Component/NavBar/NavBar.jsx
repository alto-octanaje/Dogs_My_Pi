import { Link, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { GiDogHouse } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";

const NavBar = () => {
  const location = useLocation();
  return (
    <div className={style.mainContainer}>
      <Link to="/home">
        <GiDogHouse size={56} className={style.buttonHome} />
      </Link>
      {location.pathname === "/home" ? <SearchBar />: <h1>Create new Dogs</h1> }
      <div className={style.formStyle}>
        <span>NewDog </span>
        <Link to="/from">
          <FaWpforms size={34} />
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
