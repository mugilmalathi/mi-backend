const express = require("express");
const router = express.Router();

const Smart = require("../models/smartdevice.model");

router.get("/smart", async(req, res)=>{
    const smart = await Smart.find().lean().exec();
    res.send(smart);
})

router.post("/smart", async(req, res)=>{
    const smart = await Smart.create(req.body);
    res.send(smart);
})

module.exports = router;