const mongoose = require("mongoose");

const xiaomiSchema = new mongoose.Schema({
    id:{type: Number},
    title:{type: String},
    image:{type: String}
},
{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("xiaomi", xiaomiSchema)