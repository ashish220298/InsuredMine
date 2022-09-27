var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var policyCarrierSchema = new Schema({
    company_name: {
        type: String,
      
    }
});
module.exports = mongoose.model('PolicyCarriers', policyCarrierSchema);