var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({

    firstname: {
        type: String,
       
    },

    Dob: {
        type: String,
       
    },

    address: {
        type: String,
       
    },

    phone: {
        type: String
    },

    state: {
        type: String
    },
    zipCode:{
        type: String
    },

    email:{
        type: String
    },
     userType: {
         type: String
     }
});

module.exports = mongoose.model('Users', userSchema);