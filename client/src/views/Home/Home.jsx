import{GiReturnArrow} from "react-icons/gi";
import style from "./Home.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DogCard from "../../Component/DogCard/DogCard";
import Paginate from "../Paginate/Paginate"
import {
  filterDogsApi,
  filterDogsBd,
  filterDogsweightMax,
  filterDogsweightMin,
  filterTemperaments,
  filterZa,
  getDogs,
  getDogsTemperaments,
  setLoanding,
} from "../../Redux/Action/Action";
import Loanding from "../loanding/Loanding";

export default function Home() {
  //----Paginado --------------------------
  const { numPage } = useSelector((state) => state);
  const allDogs = useSelector((state) => state.seeDogs);

  let desde = (numPage - 1) * 10; // 5
  let hasta = numPage * 10; // 10
  let cantPages = Math.floor(allDogs.length / 10);
  let allDogsFull = allDogs?.slice(desde, hasta);


// ------------------final paginado---------------





  const allTemperaments = useSelector((state) => state.temperaments);

  
  // estado local para el filtrado
  const renderUpdate = () => {
    
    setTimeout(() => {
     
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

// -------- state the button order Az -----

const [stateButton, setStateButton ]= useState("Az");
const myButton = useSelector(state => state.stateButton)

  const handleOrderZA=(e)=>{
    e.preventDefault();
    dispatch(filterZa(e.target.value));
    renderUpdate();
    if(stateButton==="Az"){
      setStateButton("Za");
    }else{
      setStateButton("Az");
    }
  }


  return (
    <main>
      <div className={style.containerSections}> 
        <div className={style.containerButtonFilter} >
          <span className={style.spanStyle } >Bring Dogs From:</span>
          <button onClick={handleDogsApi}> Api </button>
          <button onClick={handleDogsBd}>DataBase </button>
          <button onClick={handelAllDogs}>All Dogs</button>
          <span>Order From:</span>
          <button value="greater" onClick={handleFilterWeightMax}>
            Weight Greater
          </button>
          <button value="lower" onClick={handleFilterWeightMin}>
            Weight Lower 
          </button>
          <button value={stateButton} onClick={handleOrderZA} >{stateButton}</button>   
        </div>

        <div className={style.containerTemperament} >
          <span className={style.spanTemperament}  >Filter By Temperaments: </span>
          <select className={style.selectTemperament} 
            onChange={(e) => { handleFilterTemperaments(e);}} >
            {allTemperaments.map((e) => (
              <option value={e.name} name="temperaments" id={e.id} key={e.id}>
                {!e.name ? "all temperaments" : e.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {allDogsFull.length !== 0 ? (
        <DogCard allDogsFull={allDogsFull} />
      ) : (
        <Loanding />
      )}
      <div>
      <Paginate cantPages={cantPages}></Paginate>
      </div>
      

      <Link to="/">
        <button className={style.buttoomHome} ><GiReturnArrow className={style.returnArrow} /></button>
      </Link>
    </main>
  );
}
 
// imagenes
// https://i.pinimg.com/564x/53/6b/91/536b91d9c649f43c6f58301095a42a7e.jpg  perro sin encontrar
// https://i.pinimg.com/564x/8c/ae/d8/8caed883546f1a3681f8d08d7412f90a.jpg    crear nuevo perro
// https://i.pinimg.com/564x/a8/e1/7e/a8e17e06cb924f741fe206b04b43b418.jpg  imagen de perro principal
// https://c8.alamy.com/comp/W2PK60/dog-paw-print-pattern-seamless-on-white-background-W2PK60.jpg
