const axios = require("axios");
const { Dog, Temperament } = require("../db");

const getTemperament = async () => {
  try {
    const seeTemperamentBd= await Temperament.findAll();
    if(seeTemperamentBd.length===0){
      const buscando = await axios("https://api.thedogapi.com/v1/breeds");
      const getTemperamentApi = await buscando.data.map((t) => {
        return t.temperament;
      });
      console.log(getTemperamentApi);
    const allUnitedTemperament = [
      ...new Set(getTemperamentApi.join().split(",").sort()),
    ];
    allUnitedTemperament.map((e) => {
      const allTemperament = e.replace(" ", "");
      Temperament.findOrCreate({
        where: { name: allTemperament },
      });
    });
    const seeTemperamentApi = await Temperament.findAll();
    return seeTemperamentApi;
    }

    return seeTemperamentBd;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTemperament };
