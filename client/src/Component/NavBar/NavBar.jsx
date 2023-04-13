import { Link, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { GiDogHouse } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";
import { GiOverkill } from "react-icons/gi";

const NavBar = () => {
  const location = useLocation();
  return (
    <div className={style.mainContainer}>
      <Link to="/home">
        {" "}
        <GiDogHouse size={56} className={style.buttonHome} />
      </Link>
      {location.pathname === "/home" && (
        <div>
          {" "}
          <SearchBar />
        </div>
      )}

      {location.pathname === "/form" ? (     
          <h1>Create new Dogs</h1>

      ) : (
        <div className={style.formStyle}>
          <span>NewDog </span>
          <Link to="/form">
            <FaWpforms size={40} className={style.logoForm} />
          </Link>
        </div>
      )}
      <Link to="/about">
        <GiOverkill size={54} className={style.buttonAbout} />
      </Link>
    </div>
  );
};

export default NavBar;
