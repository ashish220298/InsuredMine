var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userAccountSchema = new Schema({
    account_name: {
        type: String,
       
    },
    account_type:{
        type:String,
    }
});
module.exports = mongoose.model('UserAccounts', userAccountSchema);