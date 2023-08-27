const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    description:{ 
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    }
},{timestamps:true})
const eventModel = new mongoose.model('events',eventSchema);
module.exports = eventModel;