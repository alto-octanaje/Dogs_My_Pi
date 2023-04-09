import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogsDetails } from "../../Redux/Action/Action";

import style from "./DogDetail.module.css";


export default function DogDitails() {

  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogsDetails(id));
  }, [dispatch, id]);

  const dogsDetails = useSelector((state) => state.dogsDetails);


  return (
  <>
      <div className={style.containerImagen} >
        <img src={dogsDetails.image} alt={dogsDetails.name} className={style.image}  />
      </div>
      <section className={style.styleDitails}>
        <h1 className={style.title} >Details</h1>
        <p>
          <span className={style.styleDitailsData} >name: </span>
          {dogsDetails.name}
        </p>
     
        <p>
          <span className={style.styleDitailsData} >height: </span>
          {dogsDetails.height}
        </p>
      
        <p>
          <span className={style.styleDitailsData}>weight: </span>
          {dogsDetails.weight}
        </p>
      
        <p>
          <span className={style.styleDitailsData}>year: </span>
          {dogsDetails.year}
        </p>
      
        <p>
          <span className={style.styleDitailsData}>temperament: </span>
          {dogsDetails.temperament}
        </p>
      </section>
    </>
  );
}
