const mongoose = require("mongoose");

module.exports = () =>{
    return mongoose.connect("mongodb+srv://mugilarasan:mugil@cluster0.f7ofw.mongodb.net/mongodbMiclone?retryWrites=true&w=majority")
}