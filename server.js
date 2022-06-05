//importing express
const express = require('express')

//initialisation
const app = express()

//importing  and running database
const DBconnect = require('./DBconnect')
DBconnect();

//importing dotenv
require("dotenv").config({ path: "./config/.env" });

//convert json:middleware
app.use(express.json()) 

//Route
app.use("/user", require("./routes/person"))


//Listning to the server
app.listen(process.env.PORT, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>err?console.log(err):console.log('server is running'))