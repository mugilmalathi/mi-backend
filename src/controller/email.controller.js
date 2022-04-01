const express = require("express");
const router = express.Router();

const Email = require("../models/email.model")

router.get("/email", async(req, res)=>{
    const email = await Email.find().lean().exec();
    res.send(email);
})

router.post("/email", async(req, res)=>{
    const email = await Email.create(req.body);
    res.send(email);
})

module.exports = router;