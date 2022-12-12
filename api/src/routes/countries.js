const express = require("express");
const router = express.Router();
const axios = require("axios");
const {Country, Activity} = require("../db");

const apiInfo = async () => {
    const response = await axios.get("https://restcountries.com/v3/all");
    const Info = await response.data.map(e => {
        return {
            name: e.name.common,
            continent: e.continents[0],
            img: e.flags[0]
        }
    });
    return Info;
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

router.get("", async (req, res) => {
try{
    const name = req.query.name;
    let allCountries = await allInfo();
    if (name){
        let countryName = await allCountries.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        if (countryName.length) return res.json(countryName);
        else return res.status(404).json("No se encuentra el país")
    }
    return res.json(allCountries);
}catch (e){
    res.status(400).send(e.toString());
};
});


module.exports = router;