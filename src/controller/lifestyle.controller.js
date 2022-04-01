const express = require("express");
const router = express.Router();

const Life = require("../models/lifestyle.model");

router.get("/life", async(req, res)=>{
    const life = await Life.find().lean().exec();
    res.send(life);
})

router.post("/life", async(req, res)=>{
    const life = await Life.create(req.body);
    res.send(life);
})

module.exports = router;