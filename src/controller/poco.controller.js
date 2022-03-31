const express = require("express");
const Poco = require("../Models/poco.model");
const router = express.Router();

router.post("", async(req, res)=>{
    try{
        const poco = await Poco.create(req.body)
        res.status(201).send(poco)
    }
    catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const poco = await Poco.find().lean().exec()
        res.status(200).send(poco)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const poco = await Poco.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        res.status(200).send(poco)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const poco = await Poco.findOneAndDelete({id:req.params.id})
        res.status(200).send(poco)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;