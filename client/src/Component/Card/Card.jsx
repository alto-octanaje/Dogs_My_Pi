import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  image,
  height,
  weight,
  year,
  temperament,
}) {
  return (
    <div className={style.theCards}>
      <Link to={`/detail/${id}`}>
        < >
        <h3>{name} </h3>
        <img src={image} alt={name} className={style.imageActivity} />
        <p className={style.containerCard} >year:{year}</p>
        <p>Temperament: <br/> {temperament}</p>
        </>
      </Link>
    </div>
  );
}
