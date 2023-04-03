import { GET_ALL_DOGS, SET_LOANDING, GET_DOGS_DETAILS } from "./Action_Type"
import axios from "axios";

export const getDogs = () => {

    return async function (dispatch) {
        try {
            const allDogs= await axios("http://localhost:3001/dogs")
            dispatch({type: GET_ALL_DOGS, payload: allDogs.data })
        } catch (error) {
            console.log(error);
        }
        
    }
}

export const getDogsDetails=(id)=>{
    return async function (dispatch){
        try {
            const buscar=await axios(`http://localhost:3001/dogs/${id}`)
            const allDogsID=buscar.data
            dispatch(({type:GET_DOGS_DETAILS , payload: allDogsID }))
        } catch (error) {
            console.log(error);
        }
    }
}

export const setLoanding=(value)=>{
     return {type: SET_LOANDING, payload : value}
    }