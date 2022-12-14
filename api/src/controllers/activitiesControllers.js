const {newActivity} = require("../Utils");

const createActivity = async (req, res) => {
    try {
        const {name, difficulty, duration, season, countries} = req.body;
        await newActivity({name, difficulty, duration, season, countries});
        res.json("Actividad creada con exito");
    } catch (e) {
        res.status(400).send(e.toString());
    };
};

module.exports = {createActivity};