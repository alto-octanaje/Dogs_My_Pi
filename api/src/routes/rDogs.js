const { json } = require("body-parser");
const { Router } = require("express");
const {
  getAll,  
  createBreed,
  findId,
} = require("../Controllers/ControllerDogs");
const { Dog, Temperament } = require("../db");

const router = Router();
 
router.get("/", async (req, res) => {
  try {
    const seeDogs = await getAll();
    let { name } = req.query;
    if (name) {
      name = name.toLowerCase();
      const nameBreed = seeDogs.filter((e) => e.name.toLowerCase() === name);
      if (nameBreed.length != 0) {
        res.status(200).json(nameBreed);
      } else {
        res.status(400).json({ message: "Dog breed not foundF" });
      }
    } else {
      res.status(200).json(seeDogs);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, image, height, weight, year, temperament } = req.body;
    if( !name || !image|| !height|| !weight|| !year || !temperament){
      return res.status(404).json({msg: "Fill in the necessary fields to complete the form"})
    }
    const seeNewBreed = await createBreed(
      name,
      image,
      height,
      weight,
      year,
      temperament
    );
    res.status(200).json(seeNewBreed);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const findIdDog = await findId(id);
    if (findIdDog) {
      res.status(200).json(findIdDog);
    } else {
      res.status(400).json({ message: "No item found with that ID" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/");

module.exports = router;
