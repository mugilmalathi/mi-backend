const express = require("express");
const Mitv = require("../Models/mitv.model");
const router = express.Router();

router.post("", async(req, res)=>{
    try{
        const mitv = await Mitv.create(req.body)
        res.status(201).send(mitv)
    }
    catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const mitv = await Mitv.find().lean().exec()
        res.status(200).send(mitv)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const mitv = await Mitv.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        res.status(200).send(mitv)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const mitv = await Mitv.findOneAndDelete({id:req.params.id})
        res.status(200).send(mitv)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;