const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { where } = require("sequelize");

const getApi = async () => {
  try {
    const getUrl = await axios("https://api.thedogapi.com/v1/breeds");
    const getDogsApi = await getUrl.data.map((e) => {
    
      return {
        id: e?.id,
        name: e?.name,
        image: e?.image.url,
        height: e?.height ? e.height?.metric : "Not found",
        weight: e?.weight ? e.weight?.metric : "Not found",
        year: e?.life_span ? e.life_span : "Not found",
        temperament: e?.temperament ? e.temperament.split(",").sort().map(e=>e) : "Not found",
      };
    });
    return getDogsApi;
  } catch (error) {
    console.log(error);
  }
};

const getDb = async () => {
  try {
    const getDogsDb = await Dog.findAll({ include: { model: Temperament } });
    const probando = await getDogsDb.map((e) => {
      const temp = e.temperaments.map((i) => i.id);
    
      return {
        id: e.id,
        name: e.name,
        image: e.image,
        height: e.height,
        weight: e.weight,
        year: e.year,
        temperament: temp,
      };
    });

    return probando;
  } catch (error) {
    console.log(error);
  }
};

const createBreed = async (name, image, height, weight, year, temperament) => {
  console.log(name);
  const breedExists = await Dog.findOne({ where: { name: name } });
  console.log(breedExists);
  if (breedExists === null || breedExists.length === 0) {
    try {
      let newBreed = await Dog.create({
        name,
        image,
        height,
        weight,
        year,
        temperament,
      });
      for (let nTemperament of temperament) {
        const selectedTemperament = await Temperament.findOne({
          where: { name: nTemperament },
        });

        await newBreed.addTemperament(selectedTemperament);
      }
      return newBreed;
    } catch (error) {
      console.log(error);
    }
  } else {
    throw new Error("Dog breed already exists");
  }
};

const findId = async (id) => {
  try {
    const isNumber = +id;
    if (isNumber) {
      const dogApi = await getApi();
      const itemDogApi = dogApi.filter((e) => e.id === isNumber);

      if (itemDogApi.length > 0) {
        return itemDogApi[0];
      }
    } else {
      // const itemDogBd = await Dog.findByPk(id, { include: Temperament  });
      const itemDogBd = await Dog.findAll({
        where:{id:id},attributes:["id","name"],include:{Temperament: {attributes:["id"]}} } );

      console.log("estoy aca");
      console.log(itemDogBd);
      return itemDogBd;
    }
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  const dogsApi = await getApi();
  const dogsDb = await getDb();
  // return [...dogsApi, ...dogsDb];
  return [...dogsDb];

};

module.exports = { getAll, createBreed, findId };
