const axios = require("axios");
const {Country, Activity} = require("../db")

const apiInfo = async () => {
    const response = await axios.get("https://restcountries.com/v3/all");
    const Info = await response.data.map(e => {
        return {
            name: e.name.common,
            continent: e.continents[0],
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

const dbInfo = async () => {
    return await Country.findAll({
        include: {
            model: Activity
        }
    })
};

const allInfo = async () => {
    const aInfo = await apiInfo();
    const dInfo = await dbInfo();
    const totalInfo = aInfo.concat(dInfo);
    return totalInfo;

}

module.exports = {apiInfo, dbInfo, allInfo};