const express = require("express");
const router = express.Router();
const {getCountries, countryDetails} = require("../controllers/countriesControllers");

router.get("", getCountries);

router.get("/:id", countryDetails);


module.exports = router;