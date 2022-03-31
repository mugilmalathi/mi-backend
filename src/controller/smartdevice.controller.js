const express = require("express");
const Smart = require("../Models/smartdevice.model");
const router = express.Router();

router.post("", async(req, res)=>{
    try{
        const smart = await Smart.create(req.body)
        res.status(201).send(smart)
    }
    catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const smart = await Smart.find().lean().exec()
        res.status(200).send(smart)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const smart = await Smart.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        res.status(200).send(smart)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const smart = await Smart.findOneAndDelete({id:req.params.id})
        res.status(200).send(smart)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;