const express = require("express");
const Power = require("../Models/powerbank.model");
const router = express.Router();

router.post("", async(req, res)=>{
    try{
        const power = await Power.create(req.body)
        res.status(201).send(power)
    }
    catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const power = await Power.find().lean().exec()
        res.status(200).send(power)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const power = await Power.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        res.status(200).send(power)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const power = await Power.findOneAndDelete({id:req.params.id})
        res.status(200).send(power)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;