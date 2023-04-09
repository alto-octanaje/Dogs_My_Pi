import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Landing.module.css"
import { FaPaw } from 'react-icons/fa';


export default function Landing() {
  return (
    <div className={style.landingCss}>
    <h1>welcome</h1>
    <h1><big>to the world of dogs</big></h1>
    <br />
    <Link  to="/home" ><button className={style.button}><FaPaw size={60} /></button></Link>
  
    </div>

  )
}
