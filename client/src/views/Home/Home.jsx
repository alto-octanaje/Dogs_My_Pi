import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DogCard from "../../Component/DogCard/DogCard";
import { getDogs, setLoanding } from "../../Redux/Action/Action";
import Paginado from "../Paginado/Paginado";
import Loanding from "../loanding/Loanding";

export default function Home() {
  //----Paginado --------------------------
  const loanding = useSelector((state) => state.loanding);
  const allDogs = useSelector((state) => state.seeDogs);
  const [currentPage, setCurrenPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const indexOfLastCountries = currentPage * countriesPerPage;
  const indexOfFristCharacter = indexOfLastCountries - countriesPerPage;
  const allDogsFull = allDogs.slice(
    indexOfFristCharacter,
    indexOfLastCountries
  );
  const paginado = (pageNumber) => {
    setCurrenPage(pageNumber);
  };
  // -----FindPaginado------------------------------

  // estado local para el filtrado
 
  const renderUpdate = () => {
    setTimeout(() => {
      
    }, 100);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoanding(true));
    dispatch(getDogs());
  }, [dispatch]);

 

  const next = () => {
     
    console.log("next");
  };
  const prev = () => {
    console.log("prev");
  };
  console.log(loanding);
  return (
    <div>
      <div>Home</div>

      {   allDogs.length !==0 ? <DogCard next={next} prev={prev} allDogsFull={allDogsFull} /> : <Loanding />  }

      <div>
        <Paginado
          countriesPrePage={countriesPerPage}
          allDogs={allDogs.length} //nececito un valor numerico
          paginado={paginado}
        />
      </div>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}
