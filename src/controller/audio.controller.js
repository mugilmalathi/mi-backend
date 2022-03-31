const express = require("express");
const Audio = require("../models/audio.model");
const router = express.Router();

router.post("/audio", async(req, res)=>{
    try{
        const audio = await Audio.create(req.body)
        res.status(201).send(audio)
    }
    catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("/audio",async(req,res)=>{
    try{
        const audio = await Audio.find().lean().exec()
        res.status(200).send(audio)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/audio:id",async(req,res)=>{
    try{
        const audio = await Audio.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        res.status(200).send(audio)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/audio:id",async(req,res)=>{
    try{
        const audio = await Audio.findOneAndDelete({id:req.params.id})
        res.status(200).send(audio)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;