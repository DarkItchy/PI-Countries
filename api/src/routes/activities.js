const express = require("express");
const router = express.Router();
const {createActivity} = require("../controllers/activitiesControllers");

router.post("", createActivity);


module.exports = router;