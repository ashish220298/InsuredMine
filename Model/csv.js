var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var csv= new Schema({
   
    },{strict:false})
    module.exports = mongoose.model('csv', csv);