const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const connect = require("./configs/db");

const PORT = process.env.PORT;

const redmiController = require("./controller/redmi.controller")
const xiaomiController = require("./controller/xiaomi.controller")
const pocoController = require("./Controller/poco.controller")
const mitvController = require("./Controller/mitv.controller")
const audioController = require("./Controller/audio.controller")
const powerController = require("./Controller/powerbanks.controller")
const smartController = require("./Controller/smartdevice.controller")
const lifeController = require("./Controller/lifestyle.controller")

app.use("/", redmiController);
app.use("/", xiaomiController);
app.use("/poco", pocoController);
app.use("/mitv", mitvController);
app.use("/audio", audioController);
app.use("/power", powerController);
app.use("/smart", xiaomiController);
app.use("/life", lifeController);


app.listen(PORT, async()=>{
    try{
        await connect();
        console.log("Connected to db at 1996");
    }
    catch(err){
        console.log("err", err);
    }
})


//https://glacial-plateau-42634.herokuapp.com/ | https://git.heroku.com/glacial-plateau-42634.git