const { Op } = require("sequelize");
const {Country} = require("../db");

const getCountries = async (req, res) => {
    try{
        const name = req.query.name;

        const Info = await Country.findAll();
        
        if (name){
            let countryName = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            });
            if (countryName.length) return res.json(countryName);
            else return res.status(404).json("No se encuentra el país")
        };
        return res.json(Info);
    }catch (e){
        res.status(400).send(e.toString());
    };
    };
    

module.exports = {getCountries};