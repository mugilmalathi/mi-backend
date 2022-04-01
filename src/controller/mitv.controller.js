const express = require("express");
const router = express.Router();

const Mitv = require("../models/mitv.model");

router.get("/mitv", async(req, res)=>{
    const mitv = await Mitv.find().lean().exec();
    res.send(mitv);
})

router.post("/mitv", async(req, res)=>{
    const mitv = await Mitv.create(req.body);
    res.send(mitv);
})

module.exports = router;