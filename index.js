const express = require("express")
const multer=require('multer')
const bodyParser = require('body-parser')
const route = require('./Routes/route')
const  mongoose = require("mongoose")
const app = express()
const port = 4000
app.use(multer().any())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://Ashish:ashish@cluster0.twjmguq.mongodb.net/InsuredMine",{
    useNewUrlParser : true
})

.then(()=>"MongoDBb is connected")
.catch(err=> console.log(err))

app.use('/', route)

app.listen(process.env.Port || port, function () {
    console.log("Express is running on port " +(process.env.Port || port))
})
