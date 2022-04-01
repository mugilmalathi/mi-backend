const mongoose = require("mongoose");

const mitvSchema = new mongoose.Schema({
    id:{type: Number},
    title:{type: String},
    image:{type: String}
},
{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("mitv", mitvSchema)