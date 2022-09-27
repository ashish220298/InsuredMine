var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var LOB= new Schema({
    category_name:{
        type:String
    }})
    module.exports = mongoose.model('LOB', LOB);