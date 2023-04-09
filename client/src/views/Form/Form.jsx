import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogsTemperaments, postNewDog } from "../../Redux/Action/Action";
import controllerFrom from "./controllerFrom";

export default function Form() {
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
    if (newDog.rangehight.hmin < newDog.rangehight.hmax) {
      setNewDog({
        ...newDog,
        rangehight: { ...newDog.rangehight, [e.target.name]: e.target.value },
      });
      setErrorNewDogs(
        controllerFrom({...newDog,nameDogs: 1,height: 1,weight: 1,years: 1,temperaments: 1,image:1
        })
      );
    }else{
      setNewDog({
        ...newDog,
        rangehight: { ...newDog.rangehight, [e.target.name]: e.target.value },
      });
    }    
  };
  const handleRangeWight = (e) => {
    if (newDog.rangewight.wmin < newDog.rangewight.wmax) {
      setNewDog({
        ...newDog,
        rangewight: { ...newDog.rangewight, [e.target.name]: e.target.value },
      });
      setErrorNewDogs(
        controllerFrom({ ...newDog, nameDogs: 1, height: 1, weight: 1, years: 1,temperaments: 1 ,image:1})
      );

    }else{
      setNewDog({
        ...newDog,
        rangewight: { ...newDog.rangewight, [e.target.name]: e.target.value },
      });

    }    
  };
  const forNewDog =  (e) => {
    // const temp = e.temperaments.map((i) => i);
    return {
      name: e.nameDogs,
      image: e.image,
      height: e.height,
      weight: e.weight,
      year: e.years,
      temperament: e.temperaments
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //evita que se recarge la pg
    if (
      !newDog.nameDogs ||
      !newDog.rangehight.hmin ||
      !newDog.rangehight.hmax ||
      !newDog.rangewight.wmin ||
      !newDog.rangewight.wmax ||
      !newDog.years ||
      newDog.temperaments.length ===0
    ) {
      setErrorNewDogs(controllerFrom({ ...newDog }));
      alert("must bring all fields1");
    }
     else {
      if (newDog.rangehight.hmin && newDog.rangehight.hmax && newDog.rangehight.hmin < newDog.rangehight.hmax    ) {
        if (newDog.rangewight.wmin && newDog.rangewight.wmax && newDog.rangewight.wmin < newDog.rangewight.wmax  ) {
          if ( newDog.temperaments.length !==0) {
            setNewDog({
              ...newDog,
              height: newDog.rangehight.hmin + " - " + newDog.rangehight.hmax,
              weight: newDog.rangewight.wmin + " - " + newDog.rangewight.wmax,
            });
            if (newDog.weight && newDog.height ) {
              dispatch( postNewDog(forNewDog(newDog)))
            console.log(forNewDog);
            }
            
          }else{
            alert("must bring all fields2");
          }
          
        }else alert("The value is not corecto wight");
      }else alert("The value is not corecto hight");
      
      
    }
  };

  // ------- select-Temperaments sin repetir y borrar avoluntad---------------

  const handleTemperaments = (event) => {
    if (newDog.temperaments.find((e) => e === event.target.value)) {
      return alert("The Temperaments is already selected");
    } else {
      setNewDog({
        ...newDog,
        temperaments: [...newDog.temperaments, event.target.value],
      });
    }
  };
  const handleDelete = (id) => {
    setNewDog({
      ...newDog,
      temperaments: newDog.temperaments.filter((e) => e !== id.target.value),
    });
  };

  const isUrl = /^(ftp|http|https):\/\/[^ "]+$/;


  return (
    <div>
      <div>Form</div>
      <form onSubmit={handleSubmit}>
{/* imagen Dogs                                                                                   */}
      <div>
          <label >Image Dogs: </label>
          <input type="text" onChange={handleChange} value={newDog.image} name="image" placeholder="Url image ..." />
          {!isUrl.test(newDog.image) && <span style={{color: "red" }}> {errorNewDogs.image} </span> }
        </div>

{/* name Dogs                                                                                   */}
        <div>
          <label >Name Dogs: </label>
          <input type="text" onChange={handleChange} value={newDog.nameDogs} name="nameDogs" placeholder="Name ..." />
          {errorNewDogs.nameDogs&&  <span style={{color: "red"}} >{errorNewDogs.nameDogs}</span> }
          {/* {!newDog.nameDogs &&  <span style={{color: "red"}} >{errorNewDogs.nameDogs}</span> } */}
        </div>
{/* height dogs                                                                            */}
        <div>
          <label >Height: </label>
          <input type="range" id="hmin" name="hmin" min="0" max="100"  value={newDog.rangehight.hmin|| 0 } onChange={handleRangeHight} />
          <label >{newDog.rangehight.hmin ||"Select..."} cm </label>
          <input type="range" id="hmax" name="hmax" min="0" max="100"  value={newDog.rangehight.hmax|| 0 } onChange={handleRangeHight} />
          <label >{newDog.rangehight.hmax ||"Select..."} cm </label>
          { newDog.rangehight.hmin > newDog.rangehight.hmax && <span style={{color: "red"}} >{errorNewDogs.hight}</span> }

        </div>
{/* weight dogs                                                                            */}
        <div>
          <label >Weight: </label>
          <input type="range" id="wmin" name="wmin" min="0" max="100"  value={newDog.rangewight.wmin|| 0 } onChange={handleRangeWight} />
          <label >{newDog.rangewight.wmin ||"Select..."} cm </label>
          <input type="range" id="wmax" name="wmax" min="0" max="100"  value={newDog.rangewight.wmax|| 0 } onChange={handleRangeWight} />
          <label >{newDog.rangewight.wmax ||"Select..."} cm </label>
          {newDog.rangewight.wmin > newDog.rangewight.wmax && <span style={{color: "red"}} >{errorNewDogs.wight}</span> }

        </div>
{/* years dogs                                                                            */}
        <div>
          <label>Years: </label>
          <input type="range" id="year" name="years" min="0" max="70" value={newDog.years|| 0 } onChange={handleChange} />
          <label >{newDog.years || "Select..." } years </label>
          {!newDog.years && <span style={{color: "red"}} >{errorNewDogs.years}</span> }

        </div>
{/* name temperaments                                                                             */}
        <div>
          <label >Temperament: </label>
          <select name="temperaments" value={newDog.temperaments.length-1} onChange={handleTemperaments} >
            <option >Select Temperaments:</option>
              {allTemperaments.map(e=> (
                <option value={e.name} name="temperaments" id={e.id} key={e.id} >{e.name}</option>
              ))}
              </select>
          { newDog.temperaments.length ===0 && <span style={{color: "red"}} >{errorNewDogs.temperaments}</span> }


        </div>
        <div>
          <ul>
            <li  >{ newDog.temperaments.map(i=>
            <div key={i} >
               {i}
              <button onClick={(e)=>handleDelete(e)} key={i} value={i} type="button" >x </button>
            </div>
              )}

            </li>
          </ul>
        </div>

          <button type="submit" > CREATE NEW DOG </button>
      </form>

      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  );
}

