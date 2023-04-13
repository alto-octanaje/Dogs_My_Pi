import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, handleNumber } from "../../Redux/Action/Action";
import style from "./Paginate.module.css";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

export default function Paginate({ cantPages }) {
  const { numPage } = useSelector((state) => state);
  const myNumberPg = [];
  console.log(cantPages);
  const dispatch = useDispatch();

  for (let i = 1; i <= cantPages; i++) {
    myNumberPg.push(i);
  }

  function next() {
    dispatch(nextPage());
  }
  function prev() {
    dispatch(prevPage());
  }
  function number(num) {
    dispatch(handleNumber(num));
  }
  console.log("my arry");
  console.log(myNumberPg);
  return (
    <div className={style.containerPaginate}>
      <div className={style.containerButtonNP}>
        {numPage > 1 && (
          <div>
            <button onClick={prev}>
              <div>
                <GiPreviousButton /> PREV
              </div>
            </button>
          </div>
        )}
        <h2>{numPage}</h2>

        {numPage < cantPages ? (
          <div>
            <button onClick={next}>
              NEXT <GiNextButton />{" "}
            </button>
          </div>
        ) : null}
      </div>
      <div className={style.allNum}>
        {cantPages &&
          myNumberPg.map((allPage) => (
            <button onClick={() => number(allPage)} key={allPage}>
              {allPage}
            </button>
          ))}
      </div>
    </div>
  );
}
