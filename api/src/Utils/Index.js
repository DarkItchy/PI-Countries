const axios = require("axios");
const {Country, Activity} = require("../db")

const apiInfo = async () => {
    const response = await axios.get("https://restcountries.com/v3/all");
    const Info = await response.data.map(e => {
        return {
            name: e.name.common,
            continent: e.region,
            img: e.flags[0],
            id: e.cca3,
            capital: e.capital ? e.capital[0] : "Este pais no tiene capital",
            subregion: e.subregion ? e.subregion : "No pertenece a ninguna subregion",
            area: e.area,
            population: e.population
        }
    });
    Info.forEach( el => {
        Country.findOrCreate({
            where: {
                name: el.name,
                continent: el.continent,
                img: el.img,
                id: el.id,
                capital: el.capital,
                subregion: el.subregion,
                area: el.area,
                population: el.population
            }
        });
    })
};

const newActivity = async (params) => {
    const createdActivity = await Activity.create({
        name: params.name,
        difficulty: params.difficulty,
        duration: params.duration,
        season: params.season
    });
    const countriesDb = await Country.findAll({
        where: {name: params.countries}
    });
    createdActivity.addCountry(countriesDb);
};

module.exports = {apiInfo, newActivity};