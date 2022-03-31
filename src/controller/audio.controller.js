const express = require("express");
const Audio = require("../models/audio.model");
const router = express.Router();

router.post("", async(req, res)=>{
    try{
        const audio = await Audio.create(req.body)
        res.status(201).send(audio)
    }
    catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const audio = await Audio.find().lean().exec()
        res.status(200).send(audio)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const audio = await Audio.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        res.status(200).send(audio)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const audio = await Audio.findOneAndDelete({id:req.params.id})
        res.status(200).send(audio)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;