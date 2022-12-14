const express = require("express");
const router = express.Router();
const {getCountries} = require("../controllers/countriesControllers");

router.get("", getCountries);

// router.get("/idPais")


module.exports = router;