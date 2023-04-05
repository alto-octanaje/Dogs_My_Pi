import { GET_ALL_DOGS,GET_DOGS_DETAILS, SET_LOANDING,GET_DOGS_TEMPERAMENTS} from "../Action/Action_Type";

const inicialState={
    dogs: [],
    seeDogs:[],
    dogsDetails:[],
    temperaments:[],
    loanding:false,
}

const  rootReducer=(state= inicialState,action)=> {
  switch (action.type) {
    case GET_ALL_DOGS:
      return { ...state, 
        dogs:action.payload,
        seeDogs:action.payload,

      }
    case SET_LOANDING:
      return{      ...state,     loanding:action.payload     }
      
   case GET_DOGS_DETAILS:
    return{ ...state, dogsDetails:action.payload }

    case GET_DOGS_TEMPERAMENTS:
      return {
        ...state,temperaments: action.payload
      }

    
    default:
        return {...state};
  }
}
export default rootReducer;

