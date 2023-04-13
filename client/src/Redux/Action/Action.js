import {
  GET_ALL_DOGS,
  SET_LOANDING,
  GET_DOGS_DETAILS,
  GET_DOGS_TEMPERAMENTS,
  FILTER_TEMPERAMENT,
  FILTER_DOGS_API,
  FILTER_DOGS_BD,
  FILTER_DOGS_WEIGHT_MAX,
  FILTER_DOGS_WEIGHT_MIN,
  SEARCH_NAME_DOG,
  FILTER_ZA,
  NEXT_PAGE,
  PREV_PAGE,
  HANDLE_NUMBER,
} from "./Action_Type";
import axios from "axios";

export const getDogs = () => {
  return async function (dispatch) {
    try {
      const allDogs = await axios("http://localhost:3001/dogs");
      dispatch({ type: GET_ALL_DOGS, payload: allDogs.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDogsDetails = (id) => {
  return async function (dispatch) {
    try {
      const buscar = await axios(`http://localhost:3001/dogs/${id}`);
      const allDogsID = buscar.data;
      console.log("el perro");
      console.log(allDogsID);
      dispatch({ type: GET_DOGS_DETAILS, payload: allDogsID });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getDogsTemperaments = () => {
  return async function (dispatch) {
    try {
      const temperaments = await axios("http://localhost:3001/temperament");
      dispatch({ type: GET_DOGS_TEMPERAMENTS, payload: temperaments.data });
    } catch (error) {
      console.log(error);
    }
  };
};
export const postNewDog = (newDog) => {
  return async function () {
    try {
      await axios.post("http://localhost:3001/dogs", newDog).then((res) => res);
    } catch (error) {
      console.log(error);
    }
  };
};
export const filterTemperaments = (nameTemp) => {
  return {
    type: FILTER_TEMPERAMENT,
    payload: nameTemp,
  };
};

//  ------all filter------

export const filterDogsApi = () => {
  return {
    type: FILTER_DOGS_API,
  };
};
export const filterDogsBd = () => {
  return {
    type: FILTER_DOGS_BD,
  };
};
export const filterDogsweightMax = () => {
  return {
    type: FILTER_DOGS_WEIGHT_MAX,
  };
};
export const filterDogsweightMin = () => {
  return {
    type: FILTER_DOGS_WEIGHT_MIN,
  };
};

// ----- SEARCH--------

export const searchDogs = (value) => {
  return { type: SEARCH_NAME_DOG, payload: value };
};
// ---- FILTER A-Z-------
export const filterZa = (value) => {
  console.log("action");
  console.log(value);
  return {
    type: FILTER_ZA,
    payload: value,
  };
};
//----- paginate----

export const prevPage = () => {
  return { type: PREV_PAGE };
};
export const nextPage = () => {
  return { type: NEXT_PAGE };
};
export const handleNumber = (num) => {
  return {
    type: HANDLE_NUMBER,
    payload: num,
  };
};

// -------loanding-----
export const setLoanding = (value) => {
  return { type: SET_LOANDING, payload: value };
};
