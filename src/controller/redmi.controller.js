const express = require("express");
const router = express.Router();

const Redmi = require("../models/redmi.model");

router.get("/poco", async(req, res)=>{
    const redmi = await Redmi.find().lean().exec();
    res.send(redmi);
})

router.post("/poco", async(req, res)=>{
    const redmi = await Redmi.create(req.body);
    res.send(redmi);
})

module.exports = router;