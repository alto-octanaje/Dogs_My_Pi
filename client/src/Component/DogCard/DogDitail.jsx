import React, { useEffect, useState } from "react";
import style from "./DogCard.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogsDetails } from "../../Redux/Action/Action";
import Loanding from "../../views/loanding/Loanding";

export default function DogDitails() {
  // // const loanding = useSelector((state) => state.loanding);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogsDetails(id));
  }, [dispatch, id]);

  const dogsDetails = useSelector((state) => state.dogsDetails);
  console.log("estoy");
  console.log(dogsDetails);

  return (
    // <p>hola</p>
    <article>
      <div>
        <img src={dogsDetails.image} alt={dogsDetails.name} />
      </div>
      <section>
        <p>
          <span>name: </span>
          {dogsDetails.name}
        </p>
      </section>
      <section>
        <p>
          <span>height: </span>
          {dogsDetails.height}
        </p>
      </section>
      <section>
        <p>
          <span>weight: </span>
          {dogsDetails.weight}
        </p>
      </section>
      <section>
        <p>
          <span>year: </span>
          {dogsDetails.year}
        </p>
      </section>

      <section>
        <p>
          <span>temperament: </span>
          {dogsDetails.temperament}
        </p>
      </section>
    </article>
  );
}
