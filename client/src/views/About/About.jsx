import React, { useState } from "react";
import imagen from "./jeisson.jpg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import style from "./About.module.css";

export default function About() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className={style.review}>

      <div className={style.imgContainer}>
        <h1>About me...!</h1>
        <img src={imagen} alt="no font" className={style.jeissonImg} />
      </div>
      <h4 className={style.author}>jeisson pinzon</h4>
      <p className={style.job}> Full stack developer </p>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
      </button>
      {showInfo && (
        <tt className={style.myTexto}>
        
          <br />
          Hello, my name is Jeisson Alberto Pinzón and I am currently venturing
          into the area of web development. As a student of Henry, I decided to
          face this challenge and it has been a very enriching and demanding
          experience.
          <br />
          The main objective of this project is to test the use of technologies
          such as React, Redux, Node, Express and Sequelize.
          <br />
          agradezco enormemente a Manuel Zuñiga y Oscar Royos
          <br />
          Thank you for your attention!
        </tt>
      )}
    </article>
  );
}
