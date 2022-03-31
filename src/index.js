const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const connect = require("./configs/db");

const PORT = process.env.PORT;

const redmiController = require("./controller/redmi.controller");
app.use("/", redmiController);

app.listen(PORT, async()=>{
    try{
        await connect();
        console.log("Connected to db at 1996");
    }
    catch(err){
        console.log("err", err);
    }
})