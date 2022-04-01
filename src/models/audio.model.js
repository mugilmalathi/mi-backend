const mongoose = require("mongoose");

const audioSchema = new mongoose.Schema({
    id:{type: Number},
    title:{type: String},
    image:{type: String}
},
{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("audio", audioSchema)