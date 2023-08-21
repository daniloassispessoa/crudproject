const mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender: String,
    status: String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;