import React from "react";
import { Link } from "react-router-dom";
import DogDitails from "../../Component/DogCard/DogDitail";
import style from "./Detail.module.css";
import{GiReturnArrow} from "react-icons/gi";

export default function Detail() {
  return (
    <div>
      <h2>Dog Information</h2>
      <article className={style.container}>
        <DogDitails />
      </article>
      <Link to="/home">
        <button className={style.buttoom} ><GiReturnArrow className={style.returnArrow} /></button>
      </Link>
      

    </div>
  );
}
