const express = require("express");
const router = express.Router()
const {getfile}=require("../Controller/getfile")


router.post("/getfile",getfile);





module.exports=router