import React from "react";
// import style from "./paginacion.module.css"

export default function Paginado({countriesPrePage,allDogs,paginado}) {   
    console.log("e paginado");
    console.log({countriesPrePage,allDogs,paginado}); 
    const pageNumbers=[] // donde estaran los numeros 
    for (let i = 0; i < Math.ceil(allDogs/countriesPrePage); i++) { //redondeamos la divicionde todos con el numero que nececitamos
        pageNumbers.push(i+1);
    }
    console.log(pageNumbers);
    //renderisar los nume
    return (

        <div >
            {
                pageNumbers && pageNumbers.map(number=>(
                    <button onClick={()=> paginado(number)} key={number} > {number}</button>
                ))
            }
        </div>
    )
}


// paginado estalogica esta en containercar 
// 1 bucos todos o elementos state gobal 
// 2en esta pagina le genero un estado que nececito useState(1) estado local 
// 3 declaro otro estado local guado la cantidad de caracteres por pg y donde arranca piden (10)
// 4 debo obtener el ultimo caracter de la pagina del estado actual * lacantidad de caractere por pagina esde cir multiplica el punto 2 con el punto 3 anteriores
// 5 debo obtener el primerpersonaje por paguna va hacer el ultimo personaje - la cantidad de caracter que tengo por pg esdecri el punto4-punto 2
// 6 en esta bariable guardadmos los personajes que queremos renderisar le ajace un todosloscaractere .slice(pimer personage pg , ultimo personaje de la pg).. esto se modificara dependiedo de la paguina donde este 