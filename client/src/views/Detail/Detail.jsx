import React from "react";
import { Link } from "react-router-dom";
import DogDitails from "../../Component/DogCard/DogDitail";

export default function Detail() {
  return (
    <div>
      <div>Detail</div>

      <DogDitails/>
      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  );
}
