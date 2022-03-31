const mongoose = require("mongoose");

const redmiSchema = new mongoose.Schema({
    id:{type: Number},
    title:{type: String},
    image:{type: String}
},
{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("redmi", redmiSchema)