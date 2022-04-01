const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
    id:{type: Number},
    email:{type: String}
},
{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("email", emailSchema)