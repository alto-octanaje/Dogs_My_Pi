const { Router } = require("express");
const { getTemperament } = require("../Controllers/ControllerTemperament");
const { Dog, Temperament } = require("../db");


const router = Router();

router.get("/",async(req,res)=>{
    try {
        const seeTemperaments=await getTemperament();
        res.status(200).json(seeTemperaments)
        
    } catch (error) {
    res.status(400).json({ error: error.message });
        
    }
} )

module.exports= router;