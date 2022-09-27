var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var agentSchema = new Schema({
    name: {
        type: String,
       
    }
});
module.exports = mongoose.model('Agents', agentSchema);