import{GiReturnArrow} from "react-icons/gi";
import style from "./Form.module.css";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogsTemperaments, postNewDog } from "../../Redux/Action/Action";
import controllerFrom from "./controllerFrom";
import { FaDog } from "react-icons/fa";

export default function Form() {
  const history = useHistory()
  const dispatch = useDispatch();

  const allTemperaments = useSelector((state) => state.temperaments).sort(
    (a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    }
  );
  useEffect(() => {
    dispatch(getDogsTemperaments());
  }, [dispatch]);

  const [newDog, setNewDog] = useState({
    temperaments: [],
    nameDogs: "",
    rangehight: { hmin: "", hmax: "" },
    height: "",
    rangewight: { wmin: "", wmax: "" },
    weight: "",
    years: "",
    image: "",
  });

  const [errorNewDogs, setErrorNewDogs] = useState({
    temperaments: "",
    nameDogs: "",
    rangehight: { hmin: "", hmax: "" },
    height: "",
    rangewight: { wmin: "", wmax: "" },
    weight: "",
    years: "",
    image:"",
  });

  const handleChange = (e) => {
    setNewDog({ ...newDog, [e.target.name]: e.target.value });
    setErrorNewDogs(controllerFrom({ 
      ...newDog,nameDogs: 1, height: 1, weight: 1, years: 1,temperaments: 1, image:1
      })
    );
  };
  const handleRangeHight = (e) => {
    setNewDog({
      ...newDog,
      rangehight: { ...newDog.rangehight, [e.target.name]: e.target.value },
    });  
    setErrorNewDogs(controllerFrom({ 
      ...newDog,nameDogs: 1, height: 1, weight: 1, years: 1,temperaments: 1, image:1
      })
    );
  };
  const handleRangeWight = (e) => {
    setNewDog({
      ...newDog,
      rangewight: { ...newDog.rangewight, [e.target.name]: e.target.value },
    });  
    setErrorNewDogs(controllerFrom({ 
      ...newDog,nameDogs: 1, height: 1, weight: 1, years: 1,temperaments: 1, image:1
      })
    );
  };
  
// ------- select-Temperaments sin repetir y borrar avoluntad---------------

  const handleTemperaments = (event ) => {
    if (newDog.temperaments.find((e) => e === event.target.value)) {
      return alert("The Temperaments is already selected");
    } else {
      
      setNewDog({
        ...newDog,
        temperaments: [...newDog.temperaments, event.target.value],
      });
      setErrorNewDogs(controllerFrom({ 
        ...newDog,nameDogs: 1, height: 1, weight: 1, years: 1,temperaments: 1, image:1
        })
      ); 
      
    }
  };
  const handleDelete = (id) => {
    setNewDog({
      ...newDog,
      temperaments: newDog.temperaments.filter((e) => e !== id.target.value),
    });
  };


  const forNewDog =  (e) => {
    e.nameDogs= e.nameDogs.charAt(0).toUpperCase() + newDog.nameDogs.slice(1);
    return {
      name: e.nameDogs,
      image: e.image,
      height: e.height,
      weight: e.weight,
      year: e.years,
      temperament:e.temperaments
    };
  };
  

  const handleSubmit = (e) => {
    e.preventDefault(); //evita que se recarge la pg    
    console.log(newDog.temperaments);
    if ( !newDog.image || !newDog.nameDogs || !newDog.years || newDog.temperaments.length === 0  ) {
      setErrorNewDogs(controllerFrom({...newDog}));
      alert("must bring all fields1");
    }
    // controller height
    if(!newDog.rangehight.hmin || !newDog.rangehight.hmax  ) return alert("Enter a height value")
    if(newDog.rangehight.hmin > newDog.rangehight.hmax ){
      setNewDog({
        ...newDog,
        height: false,
      });
      return  alert("Non-straight values height")
    }else{
      setNewDog({
        ...newDog,
        height: newDog.rangehight.hmin + " - " + newDog.rangehight.hmax,
      });
    } 
    // controller height
    if (!newDog.rangewight.wmin || !newDog.rangewight.wmax)  return alert("Enter a weight value")
    if(newDog.rangewight.wmin > newDog.rangewight.wmax ){
      setNewDog({
        ...newDog,
        weight:false
      });
      return  alert("Non-straight values weight")
    }else{
      setNewDog({
        ...newDog,
        weight: newDog.rangewight.wmin + " - " + newDog.rangewight.wmax,
      });

    } 
    //controller imge -years
    if(!isUrl.test(newDog.image)) return alert("Not a URL ")
    if(!isImg.test(newDog.image)) return alert("URL is not image ")
   
    if(!newDog.years)return alert("select year ")
    
    if ( newDog.temperaments.length === 0 )return alert("Must select temperaments")

  
     else { 
      if (newDog.height&& newDog.weight) {
        dispatch( postNewDog(forNewDog(newDog)))
        history.push('/home') 
        return alert("Created item")
      } 
    }
  };

 
  const isUrl = /^(ftp|http|https):\/\/[^ "]+$/;
  const isImg = /\.(jpeg|jpg|png|gif)$/i

  console.log(newDog.image);

  return (
    <section className={style.sectionContainer} >
      <form className={style.formContainer}   onSubmit={handleSubmit}>
{/* imagen Dogs                                                                                   */}
      <div  className={style.divForm}>
        <label className={style.labelForm} >Image Dogs: </label>
          <input className={style.inputForm} type="text" onChange={handleChange} value={newDog.image} name="image" placeholder="Url image ..." />
          {errorNewDogs.image  && <span style={{color: "red" }}> {errorNewDogs.image} </span> }
      </div>

{/* name Dogs                                                                                   */}
        <div className={style.divForm} >
          <label className={style.labelForm}  >Name Dogs: </label>
          <input className={style.inputForm} type="text" onChange={handleChange} value={newDog.nameDogs} name="nameDogs" placeholder="Name ..." />
          {errorNewDogs.nameDogs&&  <span style={{color: "red"}} >{errorNewDogs.nameDogs}</span> }
        </div>
{/* height dogs                                                                            */}
        <div className={style.divForm} >
          <label >Height: </label>
          <input type="range" id="hmin" name="hmin" min="0" max="100"  value={newDog.rangehight.hmin|| 0 } onChange={handleRangeHight} />
          <label >{newDog.rangehight.hmin ||"Select..."} Cm Min </label>
          <input type="range" id="hmax" name="hmax" min="0" max="100"  value={newDog.rangehight.hmax|| 0 } onChange={handleRangeHight} />
          <label >{newDog.rangehight.hmax ||"Select..."} Cm Max </label>
          { errorNewDogs.height && <span style={{color: "red"}} >{errorNewDogs.height}</span> }

        </div>
{/* weight dogs                                                                            */}
        <div className={style.divForm}>
          <label >Weight: </label>
          <input type="range" id="wmin" name="wmin" min="0" max="100"  value={newDog.rangewight.wmin|| 0 } onChange={handleRangeWight} />
          <label >{newDog.rangewight.wmin ||"Select..."} Cm Min </label>
          <input type="range" id="wmax" name="wmax" min="0" max="100"  value={newDog.rangewight.wmax|| 0 } onChange={handleRangeWight} />
          <label >{newDog.rangewight.wmax ||"Select..."} Cm Max </label>
          { errorNewDogs.weight && <span style={{color: "red"}} >{errorNewDogs.weight}</span> }
        </div>
{/* years dogs                                                                            */}
        <div className={style.divForm}>
          <label>Years: </label>
          <input type="range" id="year" name="years" min="0" max="70" value={newDog.years|| 0 } onChange={handleChange} />
          <label >{newDog.years || "Select..." } years </label>
          {errorNewDogs.years && <span style={{color: "red"}} >{errorNewDogs.years}</span> }

        </div>
{/* name temperaments                                                                             */}
        <div className={style.divForm}>
          <label >Temperament: </label>
          <select name="temperaments" value={newDog.temperaments.length-1} onChange={handleTemperaments} >
            <option >Select Temperaments:</option>
              {allTemperaments.map(e=> (
                <option value={e.name} name="temperaments" id={e.id} key={e.id} >{e.name}</option>
              ))}
              </select>
          { newDog.temperaments.length===0  && <span style={{color: "red"}} >{errorNewDogs.temperaments}</span> }


        </div>
        <div>
          <ul>
            <li  >{ newDog.temperaments.map(i=>
            <div   key={i} >
               {i}
              <button className={style.buttomTemperement} onClick={(e)=>handleDelete(e)} key={i} value={i} type="button" >x </button>
            </div>
              )}

            </li>
          </ul>
        </div>
        <div className={style.createButton}>
        <button  type="submit" > <FaDog  size={50}/>  CREATE NEW DOG </button>
        </div>
      </form>

      <Link to="/home">
        <button className={style.buttoomBack} ><GiReturnArrow className={style.returnArrow} /> </button>
      </Link>
    </section>
  );
}