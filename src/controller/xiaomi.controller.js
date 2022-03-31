const express = require("express");
const router = express.Router();

const Xiaomi = require("../models/xiaomi.model");

router.get("/xiaomi", async(req, res)=>{
    const xiaomi = await Xiaomi.find().lean().exec();
    res.send(xiaomi);
})

router.post("/xiaomi", async(req, res)=>{
    const xiaomi = await Xiaomi.create(req.body);
    res.send(xiaomi);
})

module.exports = router;