import React, { useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

import style from "./DogCard.module.css";

export default function DogCard(props) {
  
  return (
    <div>
      <div>
        <button onClick={props.next}>next</button>
        <button onClick={props.prev}>prev</button>
      </div>

      <div className={style.divCards}>
        {props.allDogsFull.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              image={e.image}
              weight={e.weight}
              temperament={e.temperament}
            />
          );
        })}
      </div>
    </div>
  );
}
