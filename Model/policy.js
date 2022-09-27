var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var policyinfoschema = new Schema({

    PolicyStartDate: {
        type: String
    },

    PolicyEndDate: {
        type: String
    },

    PolicyMode: {
        type: String
    },

    PolicyNumber: {
        type: String
    },
    PolicyType: {
        type: String
    },
    premium_amount:{
        type:Number
    },

    // users: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // }],
   
    // company: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'PolicyCarrier'
    // }]
});

module.exports = mongoose.model('PolicyInfos', policyinfoschema);