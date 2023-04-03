import React from "react";
import style from "./Card.module.css"
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
    <div className={style.theCards} >
      <Link to={`/detail/${id}`} >
      <p>id:{id} </p>
      <p>name:{name} </p>
      <img src={image} alt={name} className={style.imageActivity} />
      <p>height:{height} </p>
      <p>weight:{weight} </p>
      <p>year:{year}</p>
      <p>temperament={temperament}</p>
      </Link>
    </div>
  );
}
