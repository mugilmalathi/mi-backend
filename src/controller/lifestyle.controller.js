const express = require("express");
const Life = require("../Models/lifestyle.model");
const router = express.Router();

router.post("", async(req, res)=>{
    try{
        const life = await Life.create(req.body)
        res.status(201).send(life)
    }
    catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const life = await Life.find().lean().exec()
        res.status(200).send(life)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const life = await Life.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        res.status(200).send(life)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const life = await Life.findOneAndDelete({id:req.params.id})
        res.status(200).send(life)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;