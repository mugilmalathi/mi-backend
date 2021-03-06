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
const pocoController = require("./controller/poco.controller")
const mitvController = require("./controller/mitv.controller")
const audioController = require("./controller/audio.controller")
const powerController = require("./controller/powerbank.controller")
const lifeController = require("./controller/lifestyle.controller")
const smartController = require("./controller/smartdevice.controller")

app.use("/", redmiController);
app.use("/", xiaomiController);
app.use("/", pocoController);
app.use("/", mitvController);
app.use("/", audioController);
app.use("/", powerController);
app.use("/", lifeController);
app.use("/", smartController);



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