import {
  GET_ALL_DOGS,
  GET_DOGS_DETAILS,
  SET_LOANDING,
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
  HANDLE_NUMBER
} from "../Action/Action_Type";

const inicialState = {
  numPage: 1, 
  dogs: [],
  seeDogs: [],
  dogsDetails: [],
  temperaments: [],
  loanding: false,
};

const rootReducer = (state = inicialState, action) => {
  let regex = /[a-zA-Z]/;
  switch (action.type) {
    case GET_ALL_DOGS:
      return { ...state, dogs: action.payload, seeDogs: action.payload };
    case SET_LOANDING:
      return { ...state, loanding: action.payload };

    case GET_DOGS_DETAILS:
      return { ...state, dogsDetails: action.payload };

    case GET_DOGS_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case FILTER_TEMPERAMENT:
      const temperamentFilter = state.dogs.filter((dog) => {
        if (!dog.temperament) return undefined;
        return dog.temperament.includes(action.payload);
      });
      return {
        ...state,
        seeDogs: temperamentFilter,
      };

    case FILTER_DOGS_API:
      const allDogsApi = state.dogs.filter((e) => !regex.test(e.id));
      return {
        ...state,
        seeDogs: allDogsApi,
      };

    case FILTER_DOGS_BD:
      const allDogsDb = state.dogs.filter((e) => regex.test(e.id));
      return {
        ...state,
        seeDogs: allDogsDb,
      };

    case FILTER_DOGS_WEIGHT_MAX:
      const getAverageweight = (weigthRange) => {
        const [min, max] = weigthRange.split(" - ").map(Number);
        return (min + max) / 2;
      };
      const compareweight = (obj1, obj2) => {
        const weigth1 = getAverageweight(obj1.weight);
        const weigth2 = getAverageweight(obj2.weight);
        if (weigth1 > weigth2) return -1;
        if (weigth1 < weigth2) return 1;
        return 0;
      };
      const allDogsWeight = state.dogs.sort(compareweight);
      return { ...state, seeDogs: allDogsWeight };
  
    case FILTER_DOGS_WEIGHT_MIN:
        const getAverageweightM = (weigthRange) => {
          const [min, max] = weigthRange.split(" - ").map(Number);
          return (min + max) / 2;
        };
        const compareweightM = (obj1, obj2) => {
          const weigth1 = getAverageweightM(obj1.weight);
          const weigth2 = getAverageweightM(obj2.weight);
          if (weigth1 < weigth2) return -1;
          if (weigth1 > weigth2) return 1;
          return 0;
        };
        const allDogsWeightM = state.dogs.sort(compareweightM);
        return { ...state, seeDogs: allDogsWeightM };


    case SEARCH_NAME_DOG:
      const searchDogs= state.seeDogs;
      const searchNameDogs= searchDogs.filter(e=> 
        e.name.toLowerCase().includes(action.payload.toLowerCase())
         )
      return{
        ...state, seeDogs:searchNameDogs
      }
    
    case FILTER_ZA:
      let orderDogs=0;
      const filterDogsZa= state.dogs.sort(function(a,b){
        if (a.name > b.name) return 1
        if (a.name<b.name) return -1
        return 0;
      });
      if (action.payload==="Az") orderDogs= filterDogsZa
      else orderDogs= filterDogsZa.reverse()

      return{
        ...state, seeDogs: orderDogs
      }


  
    case NEXT_PAGE:
      return {
        ...state,
        numPage: state.numPage + 1,
      };

    case PREV_PAGE:
      return {
        ...state,
        numPage: state.numPage - 1,
      };

    case HANDLE_NUMBER:
    return {
      ...state,
      numPage: action.payload,
    };

    default:
      return { ...state };
  }
};
export default rootReducer;
