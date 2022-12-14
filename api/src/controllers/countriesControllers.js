const { Op } = require("sequelize");
const {Country, Activity} = require("../db");

const getCountries = async (req, res) => {
    try{
        const name = req.query.name;

        const info = await Country.findAll({
            attributes: ["img", "name", "id", "continent"]
        });
        
        if (name){
            let countryName = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                attributes: ["img", "name", "id", "continent"]
            });
            if (countryName.length) return res.json(countryName);
            else return res.status(404).json("No se encuentra el país")
        };
        return res.json(info);
    }catch (e) {
        res.status(400).send(e.toString());
    };
    };
    

const countryDetails =  async (req, res) => {
    try {
        const id = req.params.id;

        const info = await Country.findByPk(id, {
            include: {
                model: Activity
            }
        });
        res.json(info);
    } catch (e) {
        res.status(400).send(e.toString());
    };
};

module.exports = {getCountries, countryDetails};