const express = require("express");
const router = express.Router();

const Power = require("../models/powerbank.model");

router.get("/power", async(req, res)=>{
    const power = await Power.find().lean().exec();
    res.send(power);
})

router.post("/power", async(req, res)=>{
    const power = await Power.create(req.body);
    res.send(power);
})

module.exports = router;