const express = require("express");
const router = express.Router();

const Poco = require("../models/poco.model");

router.get("/poco", async(req, res)=>{
    const poco = await Poco.find().lean().exec();
    res.send(poco);
})

router.post("/poco", async(req, res)=>{
    const poco = await Poco.create(req.body);
    res.send(poco);
})

module.exports = router;