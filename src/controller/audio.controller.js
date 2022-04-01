const express = require("express");
const router = express.Router();

const Audio = require("../models/audio.model");

router.get("/audio", async(req, res)=>{
    const audio = await Audio.find().lean().exec();
    res.send(audio);
})

router.post("/audio", async(req, res)=>{
    const audio = await Audio.create(req.body);
    res.send(audio);
})

module.exports = router;