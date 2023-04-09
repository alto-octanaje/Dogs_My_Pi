import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DogCard from "../../Component/DogCard/DogCard";
import {
  filterDogsApi,
  filterDogsBd,
  filterDogsweightMax,
  filterDogsweightMin,
  filterTemperaments,
  getDogs,
  getDogsTemperaments,
  setLoanding,
} from "../../Redux/Action/Action";
import Paginado from "../Paginado/Paginado";
import Loanding from "../loanding/Loanding";

export default function Home() {
  //----Paginado --------------------------

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
    const allTemperaments = useSelector((state) => state.temperaments);

  // estado local para el filtrado

  const renderUpdate = () => {
    setCurrenPage(2);
    setTimeout(() => {
      setCurrenPage(1);
    }, 100);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoanding(true));
    dispatch(getDogsTemperaments());
    dispatch(getDogs());
  }, [dispatch]);

  const handleFilterTemperaments = (e) => {
    e.preventDefault();
    dispatch(filterTemperaments(e.target.value));
    renderUpdate();
  };
  const handelAllDogs = (e) => {
    e.preventDefault();
    dispatch(getDogs());
    renderUpdate();
  };
  const handleDogsApi = (e) => {
    e.preventDefault();
    dispatch(filterDogsApi());
    renderUpdate();
  };
  const handleDogsBd = (e) => {
    e.preventDefault();
    dispatch(filterDogsBd());
    renderUpdate();
  };
  const handleFilterWeightMax = (e) => {
    e.preventDefault();
    dispatch(filterDogsweightMax());
    renderUpdate();
  };
  const handleFilterWeightMin = (e) => {
    e.preventDefault();
    dispatch(filterDogsweightMin());
    renderUpdate();
  };


  const next = () => {
    console.log("netx");
  }; 
  const prev = () => {
    console.log("prev");
  };

  return (
    <div>
      <div>Home</div>
      <div>
        <select
          onChange={(e) => {
            handleFilterTemperaments(e);
          }}
        >
          {allTemperaments.map((e) => (
            <option value={e.name} name="temperaments" id={e.id} key={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleDogsApi}> Api </button>
        <button onClick={handleDogsBd}>DataBase </button>
        <button onClick={handelAllDogs}>All Dogs</button>
        <button value="greater" onClick={handleFilterWeightMax}>
          Weight greater
        </button>
        <button value="lower" onClick={handleFilterWeightMin}>
          lower weight
        </button>
      </div>

      {allDogs.length !== 0 ? (
        <DogCard next={next} prev={prev} allDogsFull={allDogsFull} />
      ) : (
        <Loanding />
      )}

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


// imagenes 
// https://i.pinimg.com/564x/53/6b/91/536b91d9c649f43c6f58301095a42a7e.jpg  perro sin encontrar
// https://i.pinimg.com/564x/8c/ae/d8/8caed883546f1a3681f8d08d7412f90a.jpg    crear nuevo perro
// https://i.pinimg.com/564x/a8/e1/7e/a8e17e06cb924f741fe206b04b43b418.jpg  imagen de perro principal
// https://c8.alamy.com/comp/W2PK60/dog-paw-print-pattern-seamless-on-white-background-W2PK60.jpg